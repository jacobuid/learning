import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

     messageAPI: string = 'http://localhost:4201';
     //messageAPI: string = 'https://api.myjson.com/bins/1divdp';

     constructor(public $http: Http) {}

     getUsers(){
          return this.$http.get(this.messageAPI + '/users?_sort=date&_order=asc')
               .map(res => res.json());
     }

     getMessages(){
          return this.$http.get(this.messageAPI + '/messages?_sort=date&_order=asc')
               .map(res => res.json());
     }

     createMessage(data){
          return this.$http.post(this.messageAPI + '/messages', data)
               .map(res => res.json());
     }

     deleteMessage(id){
          return this.$http.delete(this.messageAPI + '/messages/' + id)
               .map(res => res.json());
     }

}
