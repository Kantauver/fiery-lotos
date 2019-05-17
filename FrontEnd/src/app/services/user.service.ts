import { Injectable } from '@angular/core';
import { LoginQueryModel } from '../models/login-query.model';
import { UserSessionDataModel } from '../models/user-session-data.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';
import { AppConfigurationService } from './app-configuration.service';
import { LoaderService } from './loader/loader.service';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

    private isLoggedIn = false;
    get loggedIn(): boolean { return this.isLoggedIn; }

    private userSessionDataModel: UserSessionDataModel = new UserSessionDataModel();
    get userSessionData(): UserSessionDataModel { return this.userSessionDataModel; }

    constructor(private router: Router,
                private storageService: StorageService,
                private http: HttpClient,
                private appConfigurationService: AppConfigurationService,
                private loader: LoaderService) {
        this.isLoggedIn = this.storageService.checkIfExistUserSessionDataInStorage();
        if (this.isLoggedIn) {
            this.userSessionDataModel = this.storageService.getUserSessionData();
        }
    }

    login(loginData: LoginQueryModel) {
        this.loader.show();
        const urlRequest = `${this.appConfigurationService.config.apiHostUrl}/api/auth/login`;
        return this.http.post<any[]>(urlRequest, loginData).pipe(
            map((response: any) => {
                this.userSessionDataModel.userName = loginData.userName;
                this.userSessionDataModel.token = response.token;
                this.storageService.saveUserSessionData(this.userSessionDataModel);
                this.isLoggedIn = true;
                return response;
            }),
            finalize(() => {
                this.loader.hide();
            })
        );
    }

    logout() {
        this.loader.show();
        const body = new LoginQueryModel();
        const urlRequest = `${this.appConfigurationService.config.apiHostUrl}/api/auth/logout`;
        return this.http.post<any[]>(urlRequest, body).pipe(
            finalize(() => {
                this.isLoggedIn = false;
                this.userSessionDataModel = new UserSessionDataModel();
                this.storageService.deleteUserSessionData();
                this.loader.hide();
            })
        );
    }

}
