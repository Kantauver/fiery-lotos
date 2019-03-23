import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  menuItems = [
    { text: 'Hide' },
    { text: 'Delete' },
    {
        text: 'Clipboard',
        items: [
            { text: 'Copy' },
            { text: 'Clear' },
            { text: 'Paste' }
        ]
    }
  ];

}
