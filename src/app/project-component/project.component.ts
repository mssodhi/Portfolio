import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.scss']
})
export class ProjectComponent {

  @Input() project: any;

  onViewImage(image) {
    console.log("open some component to show image", image);
  }
}
