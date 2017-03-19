import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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

    // this.store.select<any>('PROJECTS_REDUCER')
    //   .filter(state => state.status == STATUS.COMPLETED)
    //   .first()
    //   .subscribe(state => this.projects = state.projects);

    this.store.select<any>('GRAPH_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .first()
      .subscribe(state => this.projects = state.data.projects );
  }

  onProjectSelect(project) {
    this.store.dispatch({ type: ACTION.SELECT_PROJECT, payload: project });
  }

}
