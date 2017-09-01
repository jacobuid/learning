import {Component, OnInit} from '@angular/core';

@Component({
     selector:'user',
     templateUrl: './user.component.html',
     styleUrls: ['./user.component.css']
})

export class UserComponent {

     edit:boolean;
     user:any;

     constructor(){

     }

     ngOnInit(){
          this.edit = true;
          this.user = {
               userName:'jacobuid',
               firstName: 'Jacob',
               lastName: 'king'
          };
     }

     editUser = function(){
          this.edit = !this.edit;
     };
}
