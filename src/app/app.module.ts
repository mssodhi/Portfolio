import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import 'hammerjs';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail-component/project-detail.component';
import { EducationComponent } from './education/education.component';
import { PersonalComponent } from './personal/personal.component';
import { ResumeComponent } from './resume/resume.component'
import { environment } from '../environments/environment';
import { DataService, GraphService, COURSES_REDUCER, GRAPH_REDUCER, PROJECTS_REDUCER, Effects } from './shared';


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${environment.server}/graph`
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent, ProjectsComponent, ProjectDetailComponent, EducationComponent, PersonalComponent, ResumeComponent
  ],
  imports: [
    APP_ROUTER_PROVIDERS,
    BrowserModule,
    ApolloModule.forRoot(provideClient),
    EffectsModule.run(Effects),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,
    StoreModule.provideStore({ PROJECTS_REDUCER, COURSES_REDUCER, GRAPH_REDUCER })
  ],
  providers: [DataService, GraphService],
  bootstrap: [AppComponent]
})
export class AppModule { }
