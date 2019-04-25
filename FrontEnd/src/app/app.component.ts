import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('content') contentElement: ElementRef;
  @ViewChild('menuAndContentWrapper') menuAndContentWrapperElement: ElementRef;

  contentHeight: number;

  constructor(private changeDetector: ChangeDetectorRef) {

  }

  isLeftMenuVisible = false;
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

  setSidebarMenuHeight() {
    const contentElementHeight = this.contentElement.nativeElement.offsetHeight;
    const menuAndContentWrapperElementHeight = this.menuAndContentWrapperElement.nativeElement.offsetHeight;

    this.contentHeight = contentElementHeight;

    if (menuAndContentWrapperElementHeight > contentElementHeight) {
      this.contentHeight = menuAndContentWrapperElementHeight;
    }
    this.changeDetector.detectChanges();
  }

  ngAfterViewInit() {
    this.setSidebarMenuHeight();
  }
}
