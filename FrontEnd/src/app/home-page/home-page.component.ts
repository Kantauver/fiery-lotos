import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private webApiService: WebApiService) { }

  // protected test
  getArticlesList() {
    this.webApiService.getArticlesList().subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // open test
  getArticlesCategories() {
    this.webApiService.getArticlesCategories().subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
