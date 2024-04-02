import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SupportComponent } from './pages/support/support.component';
import { ErroPagesComponent } from './pages/erro-pages/erro-pages.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'contatc',
    component:ContactComponent
  },
  {
    path:'support',
    component:SupportComponent
  },
  {
    path:'**',
    component:ErroPagesComponent
  }

];
