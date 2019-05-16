// models
import { AppConfigModel } from './models/app-config.model';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DxMenuModule } from 'devextreme-angular';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';

// services
import { LoaderService } from './services/loader/loader.service';
import { AppConfigurationService } from './services/app-configuration.service';
import { UiMessagesNotifierService } from './services/ui-messages-notifier.service';

// components
import { AppComponent } from './app.component';
import { LoaderComponent } from './services/loader/loader.component';
import { LoginComponent } from './login/login.component';

export function loadConfig(config: AppConfigurationService) {
  return (): Promise<AppConfigModel> => {
    return config.loadConfigurations();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxMenuModule,
    DxLoadPanelModule,
    DxTextBoxModule,
    DxButtonModule
  ],
  providers: [
    LoaderService,
    UiMessagesNotifierService,
    AppConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      deps: [AppConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
