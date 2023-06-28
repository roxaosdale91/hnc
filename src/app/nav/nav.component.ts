import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  isHome: boolean = true;

  constructor(readonly router: Router, private readonly route: ActivatedRoute) { 

  }

  ngOnInit(): void {
  }

  goHome() {
    this.isHome = true;
  }

  

  notHome() {
    this.isHome = false;
  }

  goContact() {
    location.href = '/contact';
    location.reload();
  }

}
