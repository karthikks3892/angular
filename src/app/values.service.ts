import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ValuesService {
  private myMethodSubject = new Subject<any>();
  empUrl : string = '/server';

  constructor(private http:HttpClient){}

  Method(data) {
    const empCreate$ = this.http.post(this.empUrl,data).subscribe(() =>{
      console.log('data sent succesfully');
    });
    return empCreate$;

  }



}
