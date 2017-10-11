import { Component } from '@angular/core';

@Component({
     selector: 'events',
     templateUrl: './events.component.html'
})

export class EventsComponent{

     text:string = 'Hello World!!';
     value:boolean = false;

     name:string = '';
     age:number = 0;

     fighters:string[] = ['Goku','Krillin','Piccolo','Tien','Yamcha']

     fighter:IFighter = {
          name:'',
          race:'',
          powerlevel:null
     };

     constructor(){}

     fireEvent(e, dude){
          //console.info('Hello, ' + dude);
          console.info(e.type);
     }

     changeValue(){
          this.text = 'Hello, Jacob!!';
          //this.value = true;
          this.value = !this.value;
     }

     inputEvent(e){
          console.info(e.type)
     }

     changeText(e){
          this.text = e.target.value;
     }

     fireSubmit(){
          this.fighters.unshift(this.name);
          this.name = '';
     }

     fireValidation({value,valid}){
          if(valid){
               console.log(value)
          } else{
               console.log('form is invalid')
          }
     }

}

interface IFighter {
     name:string;
     race:string;
     powerlevel:number;
}
