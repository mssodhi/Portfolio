import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ACTION} from '../shared/constants/actions-constants';
import {STATUS} from '../shared/constants/status-constants';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<any>) {
    this.store.dispatch({ type: ACTION.LOAD_PROJECTS });
  }

  ngOnInit() {
    this.store.select<any>('PROJECTS_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .first()
      .subscribe(state => this.projects = state.projects);
  }

  onProjectClick(project) {
    console.log(project);
    this.selectedProject = project;
  }

}
