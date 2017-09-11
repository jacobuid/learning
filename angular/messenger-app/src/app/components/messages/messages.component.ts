import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MessageService} from '../../services/message.service';

import { Message } from '../../interfaces/message.interface';
import { User } from '../../interfaces/user.interface';
import {forEach} from "@angular/router/src/utils/collection";


@Component({
     selector: 'app-messages',
     templateUrl: './messages.component.html',
     styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

     messages:Message[];
     message:Message;
     users:User[];
     typing:boolean;
     stopTimeout:any;

     constructor(private $messageService: MessageService) {}

     ngOnInit() {

          this.typing = false;
          this.message = {
               userId:'',
               message:'',
               date: new Date()
          };

          this.$messageService.getUsers().subscribe((response) => {
               this.users = response;
          });

          this.$messageService.getMessages().subscribe((response) => {
               this.messages = response;
               this.setupMessages();
          });



     }

     public setupMessages(){
          for(let i=0, message; message = this.messages[i]; i++){
               message.canDelete = false;
               message.showDate = false;
               if(this.messages[i-1] && message.userId === this.messages[i-1].userId){
                    message.showUser = false;
               } else {
                    message.showUser = true;
               }
          }
     }

     public sendMessage(){
          if(this.message.userId){
               this.message.date = new Date();
               this.$messageService.createMessage(this.message).subscribe((response) => {
                    this.messages.push(response);
                    this.message.message = '';
               });
          }
     }


     public deleteMessage(message){
          this.$messageService.deleteMessage(message.id).subscribe((response) => {
               for(let i=0, item; item = this.messages[i]; i++){
                    if(message.id === item.id){
                         this.messages.splice(i, 1);
                    }
               }
          });
     }

     public getName(item){
          return this.users[item.userId].firstName + ' ' + this.users[item.userId].lastName;
     }

     public isTyping(){
          if(this.message.userId !== '0' && this.message.userId !== ''){

               let _self = this;
               this.typing = true;

               if(typeof this.stopTimeout === "object"){
                    clearTimeout(this.stopTimeout);
                    this.stopTimeout = null;
               }

               this.stopTimeout = setTimeout(function(){
                    _self.typing = false;
                    this.stopTimeout = null;
               },2000);

          }
     }

     public mouseup(message) {
          if (this.stopTimeout) {
               // short click
               message.showDate = !message.showDate;
               clearTimeout(this.stopTimeout);
               this.stopTimeout = null;
          }
     }

     public mousedown(event, message) {
          this.stopTimeout = setTimeout(() => {
               // long click
               message.canDelete = !message.canDelete;
               event.preventDefault();
               this.stopTimeout = null;
          }, 1000);
     }

}
