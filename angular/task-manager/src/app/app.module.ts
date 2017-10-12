import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule, RouterComponents } from './app.router'

import { AppComponent } from './app.component';

import { TasksService } from './services/tasks.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    RouterComponents
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }