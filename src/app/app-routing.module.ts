import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubprofileComponent } from './clubprofile/clubprofile.component';
import { HomeModule } from './home/home.module';
import { ImmediateComponent } from './immediate/immediate.component';
import { PresidentComponent } from './president/president.component';
import { ServicesComponent } from './services/services.component';
import { VmvComponent } from './vmv/vmv.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => HomeModule
  },
  {
    path: 'president',
    component: PresidentComponent
  },
  {
    path: 'immediatepast',
    component: ImmediateComponent
  },
  {
    path: 'clubprofile',
    component: ClubprofileComponent
  },
  {
    path: 'vision',
    component: VmvComponent
  },
  {
    path: 'setservices',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
