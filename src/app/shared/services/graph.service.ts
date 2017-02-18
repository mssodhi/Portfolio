import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable()
export class GraphService {

  constructor(private apollo: Apollo) {
  }

  queryGraph(query: any) {
    return Observable.create(observer => {
      this.apollo.watchQuery({query: query})
        .subscribe(({data}) => {
          observer.next(data);
          observer.complete();
        });
    });
  }
}
