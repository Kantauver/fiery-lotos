import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { AppConfigurationService } from './app-configuration.service';
import { LoaderService } from './loader/loader.service';

@Injectable()
export class WebApiService {

    constructor(private http: HttpClient,
                private appConfigurationService: AppConfigurationService,
                private loader: LoaderService) { }

    getArticlesList() {
        this.loader.show();
        const urlRequest = `${this.appConfigurationService.config.apiHostUrl}/api/articles/list`;
        return this.http.get<string[]>(urlRequest).pipe(
            finalize(() => {
                this.loader.hide();
            })
        );
    }

    getArticlesCategories() {
        this.loader.show();
        const urlRequest = `${this.appConfigurationService.config.apiHostUrl}/api/articles/categories`;
        return this.http.get<string[]>(urlRequest).pipe(
            finalize(() => {
                this.loader.hide();
            })
        );
    }
}
