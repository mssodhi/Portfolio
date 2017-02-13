import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import 'hammerjs';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail-component/project-detail.component';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { ResumeComponent } from './resume/resume.component'
import { ProfileService, ChartsService, PROJECTS_REDUCER, Effects } from './shared';

@NgModule({
  declarations: [
    AppComponent, ProjectsComponent, ProjectDetailComponent, EducationComponent, PersonalComponent, ResumeComponent
  ],
  imports: [
    APP_ROUTER_PROVIDERS,
    BrowserModule,
    EffectsModule.run(Effects),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,
    StoreModule.provideStore({ PROJECTS_REDUCER })
  ],
  providers: [ProfileService, ChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
