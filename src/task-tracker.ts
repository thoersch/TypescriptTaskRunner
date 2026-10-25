export type Priority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  estimatedMinutes: number;
  completed: boolean;
  priority: Priority;
}

// SESSION 5 SCAFFOLD
export class TaskTracker {
  // TODO 1: Add a private Task[] field so this class owns its state.

  constructor(initialTasks: Task[] = []) {
    // TODO 2: Copy initialTasks into the private field.
    void initialTasks;
  }

  // TODO 3: Add addTask. Create an id, store the task, and return it.

  // TODO 4: Add completeTask. Return false when the id is unknown.

  // TODO 5: Add getOpenTasks and getAllTasks without exposing private state.

  // TODO 6: Add getSummary with openCount and remainingMinutes.

  // TODO 7: Add a private nextId helper.
}
