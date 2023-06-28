import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  isDisplaywhole: boolean = true;

  constructor(readonly routes: Router) {

    if(this.routes.url !== '/home') {
      this.isDisplaywhole = false;
    }
  }

  ngOnInit(): void {
  }

}
