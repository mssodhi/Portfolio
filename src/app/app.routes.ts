import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { ResumeComponent } from "./resume/resume.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    resolve: {}
  },
  {
    path: 'education',
    component: EducationComponent,
    canActivate: [],
    resolve: {}
  },
  {
    path: 'projects',
    component: HomeComponent,
    canActivate: [],
    resolve: {}
  },
  {
    path: 'personal',
    component: PersonalComponent,
    canActivate: [],
    resolve: {}
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [],
    resolve: {}
  }

];

export const APP_ROUTER_PROVIDERS = [
  RouterModule.forRoot(routes)
];
