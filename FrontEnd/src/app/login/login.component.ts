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

  @ViewChild('loginValidationGroup') loginValidationGroup: DxValidationGroupComponent;

  constructor(public userService: UserService,
              private router: Router,
              private uiMessagesNotifierService: UiMessagesNotifierService) { }

  login() {
    const validationResult = this.loginValidationGroup.instance.validate();
    if (validationResult.isValid === false) {
      return;
    }

    this.userService.login(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        this.uiMessagesNotifierService.notifyOk('Вход выполнен успешно');
        this.router.navigate(['/user-profile']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {

  }

}
