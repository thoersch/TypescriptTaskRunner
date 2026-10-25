export type Priority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  estimatedMinutes: number;
  completed: boolean;
  priority: Priority;
}

export class TaskTracker {
  private tasks: Task[];

  constructor(initialTasks: Task[] = []) {
    this.tasks = [...initialTasks];
  }

  addTask(title: string, estimatedMinutes: number, priority: Priority): Task {
    const task: Task = {
      id: this.nextId(),
      title,
      estimatedMinutes,
      completed: false,
      priority,
    };

    this.tasks.push(task);
    return task;
  }

  completeTask(id: number): boolean {
    const task = this.tasks.find((candidate) => candidate.id === id);

    if (!task) {
      return false;
    }

    task.completed = true;
    return true;
  }

  getOpenTasks(): Task[] {
    return this.tasks.filter((task) => !task.completed);
  }

  getAllTasks(): Task[] {
    return this.tasks.map((task) => ({ ...task }));
  }

  getSummary(): { openCount: number; remainingMinutes: number } {
    const openTasks = this.getOpenTasks();
    return {
      openCount: openTasks.length,
      remainingMinutes: openTasks.reduce(
        (total, task) => total + task.estimatedMinutes,
        0,
      ),
    };
  }

  private nextId(): number {
    return this.tasks.reduce((largest, task) => Math.max(largest, task.id), 0) + 1;
  }
}
