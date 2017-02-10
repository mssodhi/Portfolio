import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/Rx';

@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

  fetchProfile() {
    return this.http
      .get('http://date.jsontest.com/')
      .map(res => res.json());
  }
}
