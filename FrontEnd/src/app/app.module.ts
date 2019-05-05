// models
import { AppConfigModel } from './models/app-config.model';

// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DxMenuModule } from 'devextreme-angular';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';

// services
import { LoaderService } from './services/loader/loader.service';
import { AppConfigurationService } from './services/app-configuration.service';

// components
import { AppComponent } from './app.component';
import { LoaderComponent } from './services/loader/loader.component';

export function loadConfig(config: AppConfigurationService) {
  return (): Promise<AppConfigModel> => {
    return config.loadConfigurations();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxMenuModule,
    DxLoadPanelModule
  ],
  providers: [
    LoaderService,
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
