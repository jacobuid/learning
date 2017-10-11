import {Component} from '@angular/core';

@Component({
     selector:'syntax',
     templateUrl:'./template-syntax.component.html',
     styleUrls: [
          './template-syntax.component.css'
     ]
})

export class TemplateSyntaxComponent {

     names:string[] = ['Goku','Vegeta','Krillin','Tien','Yamcha','Gohan'];
     fighters:any[] = [
          { name:'Gohan', power: 5000},
          { name:'Goku', power: 8001},
          { name:'Vegeta', power: 18000},
          { name:'Piccolo', power: 3000}
     ];

     hero:string = 'Goku';
     showHero:boolean = true;

     winning:number = 3;

     isRound:boolean = true;
     isBlock:boolean = true;

     image:string = 'http://placehold.it/300x100&text='+this.hero;

     buttonClasses:any = {
          round: this.isRound,
          block: this.isBlock
     };

     changeButton(){
          this.buttonClasses = {
               round: false,
               block: false
          };
     }

     birthday:any = new Date(1985,10,6)

     cost:number = 21000;

     fee:number = .04;

}
