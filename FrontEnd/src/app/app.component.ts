import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isLeftMenuVisible = true;
  isSchedeMenuOpened = true;
  isRegistrazioneMenuOpened = true;
  isReportMenuOpened = true;

  toggleLeftMenu() {
    this.isLeftMenuVisible = !this.isLeftMenuVisible;
  }

  toggleSchedeMenuArrow() {
      this.isSchedeMenuOpened = !this.isSchedeMenuOpened;
  }

  toggleRegistrazioneMenuArrow() {
      this.isRegistrazioneMenuOpened = !this.isRegistrazioneMenuOpened;
  }

  toggleReportMenuArrow() {
      this.isReportMenuOpened = !this.isReportMenuOpened;
  }
}
