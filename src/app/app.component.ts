import { Component, OnInit } from '@angular/core';
import { ACTION } from './shared';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideMenuItems = [
    {title: 'Projects', link: ''},
    {title: 'Education', link: '/education'},
    {title: 'Personal', link: '/personal'},
    {title: 'Resume', link: '/resume'}
  ];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.store.dispatch({ type: ACTION.LOAD_PROJECTS });
  }

}
