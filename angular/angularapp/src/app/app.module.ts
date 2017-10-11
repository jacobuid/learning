import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {TemplateSyntaxComponent} from './components/template-syntax/template-syntax.component';

import {UserComponent} from './components/user/user.component';
import {EventsComponent} from './components/events/events.component';
import { ServiceComponent } from './components/service/service.component';
import { Service2Component } from './components/service2/service2.component';

import { DataService } from './services/data.service';


@NgModule({
     declarations: [
          AppComponent,
          HelloWorldComponent,
          TemplateSyntaxComponent,
          UserComponent,
          EventsComponent,
          ServiceComponent,
          Service2Component
     ],
     imports: [
          BrowserModule,
          FormsModule
     ],
     providers: [
          DataService
     ],
     bootstrap: [AppComponent]
})
export class AppModule { }
