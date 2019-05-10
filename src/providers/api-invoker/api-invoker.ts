import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ApiInvokerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiInvokerProvider {
  films: Observable<any>;

  constructor(public httpClient: HttpClient) {
    console.log('Hello ApiInvokerProvider Provider');    
  }

  getData() {
    //this.films = this.httpClient.get('https://swapi.co/api/films');
   
      this.films = this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1',);
      return this.films;
    
    
    // this.films
    // .subscribe(data => {
    //   console.log('my data: ', data);
    // })
  }

}
