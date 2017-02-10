import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sideMenuItems = [
    {title: 'Projects', link: ''},
    {title: 'Education', link: '/education'},
    {title: 'Personal', link: '/personal'},
    {title: 'Resume', link: '/resume'}
  ];

  ngOnInit() {

  }

}
