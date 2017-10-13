import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TasksService {
  
  tasksAPI: string = 'http://localhost:4202';

  constructor(public $http: Http) {}

  getBacklogs(){
    return this.$http.get(this.tasksAPI + '/tasks?type=backlog')
         .map(res => res.json());
  }

}
