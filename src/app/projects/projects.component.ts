import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import gql from 'graphql-tag';

import { ACTION, STATUS } from '../shared';

@Component({
  selector: 'home',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private store: Store<any>) {
  }

  ngOnInit() {

    // ************************************** GraphQL **************************************
    const Projects = gql`
      query Profile {
        projects {
          name
          platform
          language
          links
          images
        }
      }
    `;

    this.store.dispatch({ type: ACTION.LOAD_GRAPH, payload: Projects });

    this.store.select<any>('GRAPH_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .first()
      .subscribe(state => this.projects = state.data.projects);
    // ************************************** GraphQL **************************************


    // this.store.select<any>('PROJECTS_REDUCER')
    //   .filter(state => state.status == STATUS.COMPLETED)
    //   .first()
    //   .subscribe(state => this.projects = state.projects);
  }

  onProjectSelect(project) {
    this.store.dispatch({ type: ACTION.SELECT_PROJECT, payload: project });
  }

}
