import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() project: any;

  ngOnInit() {

    console.log('in project-component component!', this.project);
  }
}
