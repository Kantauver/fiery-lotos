import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private userService: UserService,
              private storageService: StorageService,
              private router: Router) {}

  canActivate() {
    if (this.userService.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
