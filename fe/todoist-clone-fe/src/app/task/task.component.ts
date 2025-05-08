import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TaskService} from "../../services/task.service";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {TaskModel} from "../../models/task.model";
import {DatePipe, NgIf} from "@angular/common";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatCard, MatCardHeader} from "@angular/material/card";

@Component({
  selector: 'app-task',
  imports: [
    MatButton,
    MatInput,
    FormsModule,
    NgIf,
    DatePipe,
    MatNavList,
    MatListItem,
    MatCard,
    MatCardHeader,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  public taskName: string = " ";
  newTask: TaskModel | null = null;

  allTasks: TaskModel[] = [];


  constructor(private taskService: TaskService) {}

  public enterTaskName(): void {

    if (!this.taskName.trim()) { return; }

    this.newTask = this.taskService.generateTask(this.taskName);

    //? clear input after task is created:
    this.taskName = " ";

  }

  public saveTask(): void {
    if (this.newTask) {
      this.allTasks.push(this.newTask);

      console.log("Task pushed into array")

    }
  }

}
