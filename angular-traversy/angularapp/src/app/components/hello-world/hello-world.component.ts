import {Component} from '@angular/core';

@Component({
     selector: 'hello-world',
     templateUrl: './hello-world.component.html'
})

export class HelloWorldComponent {

     name = 'John Doe';
     age = 35;
     person = {firstName: 'Jacob', lastName: 'King'};

     constructor() {
          console.info('Constructor ran...');

          this.hasBirthday();
          this.hasBirthday();

     }

     hasBirthday = function(){
          this.age += 1
     }

     getAge = function(){
          return this.age;
     }

}
