import { Component, OnInit } from '@angular/core';
import { PathService } from '../path.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
  }



  goHome() {
    location.href = 'home/';
  }



  goContact() {

    location.href = '#/home/contact';
    location.reload();
  }
}
