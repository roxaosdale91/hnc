import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubprofileComponent } from './clubprofile/clubprofile.component';
import { FooterComponent } from './footer/footer.component';
import { ImmediateComponent } from './immediate/immediate.component';
import { NavComponent } from './nav/nav.component';
import { PathService } from './path.service';
import { PresidentComponent } from './president/president.component';
import { ServicesComponent } from './services/services.component';
import { VmvComponent } from './vmv/vmv.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubprofileComponent,
    FooterComponent,
    ImmediateComponent,
    NavComponent,
    PresidentComponent,
    ServicesComponent,
    VmvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
