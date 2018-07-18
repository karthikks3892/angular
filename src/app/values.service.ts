import { Injectable } from '@angular/core';

@Injectable()
export class ValuesService {
  value: any;
  Method(data) {
    this.value = data;

  }

  getValues() {
    return this.value;
  }

}
