import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-nglist',
  templateUrl: './nglist.component.html',
  styleUrls: ['./nglist.component.css']
})
export class NglistComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }



}
