import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MessagesComponent} from './components/messages/messages.component';
import {MessageService} from './services/message.service';

@NgModule({
     declarations: [
          AppComponent,
          MessagesComponent
     ],
     imports: [
          BrowserModule,
          HttpModule,
          FormsModule
     ],
     providers: [MessageService],
     bootstrap: [AppComponent]
})
export class AppModule {
}
