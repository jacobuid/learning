import { Component, OnInit } from '@angular/core';

import { TasksService } from '../../services/tasks.service';

import { BacklogInterface } from '../../interfaces/backlog.interface'

@Component({
    selector: 'app-backlog',
    templateUrl: './backlog.component.html',
    styleUrls: ['./backlog.component.css']
})
export class BacklogComponent implements OnInit {

    backlogs: BacklogInterface;

    constructor(public taskService: TasksService) { }

    ngOnInit() {

        this.taskService.getBacklogs().subscribe((response) => {
            this.backlogs = response;
        });

    }

}
