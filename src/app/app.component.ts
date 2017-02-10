import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideMenuItems = [
    {title: 'Projects', link: ''},
    {title: 'Education', link: ''},
    {title: 'Personal', link: ''},
    {title: 'Resume', link: ''}
  ];

  ngOnInit() {

  }

}
