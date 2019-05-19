import { Component, OnInit, ViewChild } from '@angular/core';
import { DxValidationGroupComponent } from 'devextreme-angular/ui/validation-group';
import { LoginQueryModel } from '../models/login-query.model';
import { UserService } from '../services/user.service';
import { UiMessagesNotifierService } from '../services/ui-messages-notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginQueryModel = new LoginQueryModel();
  invalidLogin = false;

  @ViewChild('loginValidationGroup') loginValidationGroup: DxValidationGroupComponent;

  constructor(public userService: UserService,
              private router: Router,
              private uiMessagesNotifierService: UiMessagesNotifierService) { }

  login() {
    this.invalidLogin = false;
    const validationResult = this.loginValidationGroup.instance.validate();
    if (validationResult.isValid === false) {
      return;
    }

    this.userService.login(this.loginData).subscribe(
      (response: any) => {
        console.log(response);
        if (response.success) {
          this.uiMessagesNotifierService.notifyOk('Вход выполнен успешно');
          this.router.navigate(['/user-profile']);
        } else {
          this.invalidLogin = true;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

  }

}
