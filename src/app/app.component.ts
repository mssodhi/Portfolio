import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ACTION } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideMenuItems = [
    {title: 'Projects', link: ''},
    {title: 'Education', link: 'education'},
    // {title: 'Personal', link: 'personal'},
    // {title: 'Resume', link: 'resume'}
  ];

  constructor(private store: Store<any>, private router: Router) {
  }

  ngOnInit() {
    this.store.dispatch({ type: ACTION.LOAD_PROJECTS });
    this.store.dispatch({ type: ACTION.LOAD_COURSES });
  }

  navigateTo(link) {
    this.router.navigateByUrl(link, { skipLocationChange: true });
  }

}
