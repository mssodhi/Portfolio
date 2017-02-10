import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    resolve: {}
  }
];

export const APP_ROUTER_PROVIDERS = [
  RouterModule.forRoot(routes)
];
