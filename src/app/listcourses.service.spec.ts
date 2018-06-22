import { TestBed, inject } from '@angular/core/testing';

import { ListcoursesService } from './listcourses.service';

describe('ListcoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListcoursesService]
    });
  });

  it('should be created', inject([ListcoursesService], (service: ListcoursesService) => {
    expect(service).toBeTruthy();
  }));
});
