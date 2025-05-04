export interface task {

  id: number;
  taskName: string;
  taskCreatedAt: Date;
  taskHeaderName: string;
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
