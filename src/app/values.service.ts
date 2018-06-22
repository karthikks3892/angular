import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Resolve } from '@angular/router';

@Injectable()
export class ValuesService {
  private myMethodSubject = new Subject<any>();
  value: any;
  Method(data) {
    //this.myMethodSubject.next(data);
    this.value = data;

  }

  getValues() {
    return this.value;
  }

}
