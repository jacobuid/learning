import {Component} from '@angular/core';
import {ICustomer} from '../../interfaces/customer.interface'

@Component({
     selector: 'hello-world',
     templateUrl: './hello-world.component.html'
})

export class HelloWorldComponent {

     fullname: string = 'John Doe';
     age: number = 35;
     person: IPerson = {firstName: 'Jacob', lastName: 'King'};
     hasChildren:boolean = true;

     children: number[] = [1,3,6];
     vehicles: string[] = ['car','truck','suv','motorcycle','boat','van'];

     customer:ICustomer = { id: 10, name:'Bill Smith', email:'billsmith@email.com' };

     customers:ICustomer[] = [
          { id: 10, name:'Bill Smith', email:'billsmith@email.com' },
          { id: 15, name:'Ben Cade', email:'bencade@email.com' },
          { id: 20, name:'Bob Hope', email:'bobhope@email.com' }
     ];

     constructor() {
          console.info('Constructor ran...');

          this.hasBirthday();
          this.hasBirthday();

     }

     hasBirthday = function(){
          this.age += 1
     };

     getAge = function(){
          return this.age;
     };

}

interface IPerson {
     firstName:string;
     lastName:string;
}
