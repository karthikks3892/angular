import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../values.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-renderer',
  templateUrl: './data-renderer.component.html',
  styleUrls: ['./data-renderer.component.css']
})
export class DataRendererComponent implements OnInit {
  data;
  constructor(private valueService: ValuesService) { }

  ngOnInit() {
    this.data = this.valueService.getValues();
    console.log(this.data);
  }

}

