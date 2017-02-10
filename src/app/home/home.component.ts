import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  profile$: Observable<any>;
  projects: any[] = [];
  selectedProject: any = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private store: Store<any>) {
    this.profile$ = this.store.select('PROFILE_REDUCER');
  }

  ngOnInit() {
    this.projects.push(
      { name: 'Chicken Hop' },
      { name: 'SoundBox' },
      { name: 'Jarvis' },
      { name: 'Wake me up' },
      { name: 'WebCraft' },
      { name: 'Speech to text' }
    );
  }

  onProjectClick(project) {
    console.log(project);
    this.selectedProject = project;
  }

}
