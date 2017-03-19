import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import gql from 'graphql-tag';

import {ACTION, STATUS} from './shared';

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
    // this.store.dispatch({type: ACTION.LOAD_PROJECTS});
    this.store.dispatch({type: ACTION.LOAD_COURSES});

    // ************************************** GraphQL **************************************
    const Projects = gql`
      query Profile {
        projects {
          name
          platform
          language
          links
          images
          description
        }
      }
    `;

    this.store.dispatch({type: ACTION.LOAD_GRAPH, payload: Projects});

    this.store.select<any>('GRAPH_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .first()
      .subscribe(state => this.store.dispatch({type: ACTION.SELECT_PROJECT, payload: state.data.projects[2]}));
    // ************************************** GraphQL **************************************
  }

  navigateTo(link) {
    this.router.navigateByUrl(link, {skipLocationChange: true});
  }

}
