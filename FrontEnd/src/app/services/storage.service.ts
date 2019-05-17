import { Injectable } from '@angular/core';
import { UserSessionDataModel } from '../models/user-session-data.model';

@Injectable()
export class StorageService {

  constructor() { }

  saveUserSessionData(userSessionData: UserSessionDataModel) {
    sessionStorage.setItem('ums_userSessionData', JSON.stringify(userSessionData));
  }

  getUserSessionData(): UserSessionDataModel {
    const userSessionDataFromStorage = sessionStorage.getItem('ums_userSessionData');
    const userSessionData: UserSessionDataModel = JSON.parse(userSessionDataFromStorage);
    return userSessionData;
  }

  deleteUserSessionData() {
    sessionStorage.removeItem('ums_userSessionData');
  }

  checkIfExistUserSessionDataInStorage(): boolean {
    const userSessionDataExistInStorage: boolean = !!sessionStorage.getItem('ums_userSessionData');
    return userSessionDataExistInStorage;
  }
}
