import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  /**
   * Mock endpoint, does not do anything
   */
  public helloWorld() : Observable<any> {
    return this.http.get('/api/v1/hello-world/', {responseType: 'text'}).pipe(
        map(data => {
          return data;
        })
      );
  }
}
