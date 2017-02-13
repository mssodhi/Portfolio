import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { STATUS } from '../shared';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['education.component.scss']
})
export class EducationComponent implements OnInit {

  courses: any[] = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select<any>('COURSES_REDUCER')
      .filter(state => state.status == STATUS.COMPLETED)
      .first()
      .subscribe(state => this.courses = state.courses);
  }

}
