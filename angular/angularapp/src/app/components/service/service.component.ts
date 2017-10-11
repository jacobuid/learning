import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/data.service'

@Component({
     selector: 'app-service',
     templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

     users:string[];
     usersTest:string[];

     constructor(public dataService: DataService) {}

     ngOnInit() {

          this.users = this.dataService.getUsers();
          this.usersTest = this.dataService.users;



     }

}
