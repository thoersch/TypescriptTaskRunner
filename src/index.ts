enum Priority {
    LOW = "low",
    MED = "medium",
    HIGH = "high"
}

class Task {
  id: number = 1;
  title: string = "";
  estimatedMinutes: number = 0;
  completed: boolean = false;
  priority: Priority = Priority.LOW;
  subtasks: SubTask[] = [];

  constructor(id: number, title: string, estimatedMinutes: number, completed: boolean, priority: Priority) {
    this.id = id;
    this.title = title;
    this.estimatedMinutes = estimatedMinutes;
    this.completed = completed;
    this.priority = priority;
  }

  addSubTask(subtask: SubTask): void {
    this.subtasks.push(subtask);
  }

  printTask(): void {
    console.log(`(${this.id}) ${this.title} (${this.priority.toString()})`);
    console.log(`-----------------`);
    console.log(`Estimated Minutes: ${this.estimatedMinutes}\nCompleted: ${this.completed}`);

    if (this.subtasks.length > 0) {
        console.log(`Subtasks: [`)
        for (const subtask of this.subtasks) {
            subtask.printTask();
        }
        console.log(']');
    }

    if (!(this instanceof SubTask)) {
        console.log("\n");
    }
  }
}

class SubTask extends Task {
    description: string;

    constructor(id: number, title: string, description: string, estimatedMinutes: number, completed: boolean, priority: Priority) {
        super(id, title, estimatedMinutes, completed, priority);
        this.description = description;
    }
}

function getOpenTasks(tasks: Task[]) {
    let openTasks: Task[] = [];
    
    for(const task of tasks) {
        if (!task.completed) {
            openTasks.push(task);
        }
    }

    return openTasks;
}

function getRemainingMinutes (tasks: Task[]) {
    let remainingMinutes: number = 0;

    for (const task of tasks) {
        if (!task.completed) {
            remainingMinutes += task.estimatedMinutes;

            for (const subtask of task.subtasks) {
                remainingMinutes += subtask.estimatedMinutes;
            }
        }
    }

    return remainingMinutes;
}

const tasks: Task[] = [
    new Task(1, "Prepare meeting notes", 30, false, Priority.LOW),
    new Task(2, "Reply to project email", 15, true, Priority.MED),
    new Task(3, "Review weekly metrics", 45, false, Priority.HIGH)
];

const subtask: SubTask = new SubTask(4, "Add new metrics", "Metrics are lacking, need more.", 60, false, Priority.HIGH);
tasks[1].addSubTask(subtask);

for (const task of tasks) {
  task.printTask();
}

let openTasks: Task[] = getOpenTasks(tasks);
console.log(`Open Taks: ${openTasks.length}`);
let remainingMinutes: number = getRemainingMinutes(tasks);
console.log(`Remaining Minutes: ${remainingMinutes}`);
