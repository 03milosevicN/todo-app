import { Injectable } from "@angular/core";
import {TaskModel} from "../models/task.model"

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    /**
     * Generate new task template, according to task model.
     */
    private idCounter: number = 0;

    generateTask(taskName: string): TaskModel {

        this.idCounter++;
        return {
            id: this.idCounter++,
            taskName: taskName.trim(),
            taskCreatedAt: new Date(),
            taskTags: [],
            taskText: "",
            taskPriority: 'low',
            isCompleted: false,
        };

    }

}
