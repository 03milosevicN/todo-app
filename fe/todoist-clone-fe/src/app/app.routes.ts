import { Routes } from '@angular/router';
import {TaskComponent} from './task/task.component';
import {ApiComponent} from './api/api.component';

export const routes: Routes = [
  {path: "task", component: TaskComponent},
  {path: "api", component: ApiComponent},
];
