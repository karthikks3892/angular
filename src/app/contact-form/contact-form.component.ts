import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../values.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ];

  data;
  constructor(private valueService: ValuesService, private router: Router) {

  }

  submit(f) {
    this.data = f.value;
    this.valueService.Method(this.data);
    this.router.navigate(['/datarenderer']);

  }


  ngOnInit() {
  }


}
