export interface TaskModel {

  id: number;
  taskName: string;
  taskCreatedAt: Date;
  taskTags: string[];
  taskText: string;
  /* task priority colors:
   * low - green,
   * medium - ocker,
   * high - red
   */
  taskPriority: "low" | "medium" | "high";
  isCompleted: boolean;

}
