import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service'

import {Post} from '../../interfaces/post.interface'
import {Address} from '../../interfaces/address.interface'

@Component({
     selector: 'app-user',
     templateUrl: './user.component.html',
     styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

     edit:boolean;
     name: string;
     age: number;
     email:string;
     address: Address;
     hobbies: string[];
     posts: Post[];

     constructor( private $dataService: DataService) {

          console.log('userComponent constructor ran...');

     }

     ngOnInit() {
          console.log('userComponent ngOnInit ran...');

          this.edit = false;
          this.name = 'John Doe';
          this.age = 30;
          this.email = 'john.doe@gmail.com';
          this.address = {
               street:'100 Main St',
               city:'Dallas',
               state:'TX'
          };
          this.hobbies = [
               'workout',
               'walking',
               'guitar',
               'blacksmithing',
               'carpentry',
               'coding'
          ];

          this.$dataService.getPosts().subscribe((posts) => {
               this.posts = posts;
          });
     }

     toggleEdit(){
          this.edit = !this.edit;
     }

     addHobby(value){
          if(value){
               this.hobbies.unshift(value);
          } else {
               console.error('Error: There is no Value')
          }
          return false;
     }

     deleteHobby(value){
          for(let i=0, hobby; hobby = this.hobbies[i]; i++){
               if(hobby === value){
                    this.hobbies.splice(i, 1);
               }
          }

     }

}
