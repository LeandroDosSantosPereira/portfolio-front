import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  // Paginate
	page = 4;
  page1 = 5;
  page2 = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
