import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingComponent } from './landing/landing.component';
import { OfficersComponent } from './officers/officers.component';
import { MembersComponent } from './members/members.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { homeRoutes } from './home.router';



@NgModule({
  declarations: [
    HomeComponent, 
    LandingComponent, 
    OfficersComponent, 
    MembersComponent, 
    ServicesComponent, 
    ContactComponent
  ],
  imports: [
    CommonModule,
    homeRoutes
  ]
})
export class HomeModule { }
