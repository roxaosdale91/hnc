import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AppModule } from '../app.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'contact',
                component: ContactComponent
            }
        ]
    },
];


export const homeRoutes = RouterModule.forChild(routes);