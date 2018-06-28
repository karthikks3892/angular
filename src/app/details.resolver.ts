import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ValuesService } from "./values.service";
import { Observable } from "rxjs/Observable";

@Injectable()

export class DetailResolver {

    constructor(private service: ValuesService) { }

   
}