import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { STATUS } from '../shared';

@Component({
  selector: 'project-detail-component',
  templateUrl: 'project-detail.component.html',
  styleUrls: ['project-detail.component.scss']
})
export class ProjectDetailComponent {

  project: any;

  constructor(private store: Store<any>) {
    this.store.select<any>('PROJECTS_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .subscribe(state => this.project = state.selectedProject);
  }

}
