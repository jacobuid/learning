import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import {UserComponent} from './components/user/user.component';


@NgModule({
     declarations: [
          AppComponent,
          HelloWorldComponent,
          UserComponent
     ],
     imports: [
          BrowserModule,
          FormsModule
     ],
     providers: [],
     bootstrap: [AppComponent]
})
export class AppModule { }
