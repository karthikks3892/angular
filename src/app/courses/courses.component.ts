import { Component, OnInit } from '@angular/core';
import { ListcoursesService } from '../listcourses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 courses;
  constructor(service: ListcoursesService) {
    this.courses = service.getCourses();
   }
        ngOnInit() {
  }

}
