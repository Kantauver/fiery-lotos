// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DxMenuModule } from 'devextreme-angular';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';

// services
import { LoaderService } from './services/loader/loader.service';

// components
import { AppComponent } from './app.component';
import { LoaderComponent } from './services/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxMenuModule,
    DxLoadPanelModule
  ],
  providers: [
    LoaderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
