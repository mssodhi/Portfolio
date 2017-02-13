import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { STATUS } from '../shared';

@Component({
  selector: 'project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.scss']
})
export class ProjectComponent {

  project: any;

  constructor(private store: Store<any>) {
    this.store.select<any>('PROJECTS_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .subscribe(state => this.project = state.selectedProject);
  }

  onViewImage(image) {
    console.log("open some component to show image", image);
  }
}
