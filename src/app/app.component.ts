import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SampleService} from "./service/sample.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public sampleService: SampleService) {
  }
  title = 'angular-interview';

  public helloWorld() {
    this.sampleService.helloWorld().subscribe(data =>{
      // do something
    });
  }

}
