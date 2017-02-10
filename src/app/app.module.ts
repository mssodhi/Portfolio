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
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project-component/project.component';
import { ProfileService, ChartsService } from './shared/services';
import { PROFILE_REDUCER, Effects } from './shared/reducers'

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ProjectComponent
  ],
  imports: [
    APP_ROUTER_PROVIDERS,
    BrowserModule,
    EffectsModule.run(Effects),
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,
    StoreModule.provideStore({ PROFILE_REDUCER })
  ],
  providers: [ProfileService, ChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
