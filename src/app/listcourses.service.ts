import { Injectable } from '@angular/core';

@Injectable()
export class ListcoursesService {
  getCourses(){
    return ['course1','course2','course3'];
  }
  constructor() { }

}
