import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TaskComponent } from './components/task/task.component';
import { BacklogComponent } from './components/backlog/backlog.component';
import { SprintComponent } from './components/sprint/sprint.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: 'task', component: TaskComponent },
    { path: 'backlog', component: BacklogComponent },
    { path: 'sprint', component: SprintComponent },
    { path: '', redirectTo: '/backlog', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    providers: [
        HttpModule
    ],
    exports: [
        RouterModule,
        HttpModule
    ]
})

export class AppRouterModule { }

export const RouterComponents = [
    TaskComponent,
    BacklogComponent,
    SprintComponent,
    NotFoundComponent
]