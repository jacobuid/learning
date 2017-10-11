import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class DataService {
     users:string[];
     data: Observable<Array<number>>;

     public userChangedEvent: EventEmitter<Array<string>> = new EventEmitter();

     constructor(){
          this.users = ['Luke','Anikan','Yoda','Obi-Wan']
     }

     getUsers(){
          return this.users;
     }

     userChanged(val: string[]) {
          this.userChangedEvent.emit(val);
     }
}
