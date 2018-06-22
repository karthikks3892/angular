import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ValuesService } from "./values.service";
import { Observable } from "rxjs/Observable";

@Injectable()

export class DetailResolver implements Resolve<any>{

    constructor(private service: ValuesService) { }

    resolve(): Observable<any> {
        return this.service.getValues();
    }

}