// SESSION 5 SCAFFOLD
// The object-based report below still runs while the TaskTracker class is built.

// TODO 1: Open task-tracker.ts and complete its TODOs in order.

// TODO 2: Export Task, Priority, and TaskTracker from that module.

// TODO 3: Return here and import the class and Task type.

// TODO 4: Replace the reporting code below with one TaskTracker instance.

// TODO 5: Use class methods to add, complete, list, and summarize tasks.

type Priority = "low" | "medium" | "high";

interface Task {
  id: number;
  title: string;
  estimatedMinutes: number;
  completed: boolean;
  priority: Priority;
}

const tasks: Task[] = [
  { id: 1, title: "Prepare meeting notes", estimatedMinutes: 30, completed: false, priority: "high" },
  { id: 2, title: "Reply to project email", estimatedMinutes: 15, completed: true, priority: "medium" },
  { id: 3, title: "Review weekly metrics", estimatedMinutes: 45, completed: false, priority: "high" },
];

const openTasks = tasks.filter((task) => !task.completed);
const remainingMinutes = openTasks.reduce(
  (total, task) => total + task.estimatedMinutes,
  0,
);

for (const task of openTasks) {
  console.log(`#${task.id} [${task.priority}] ${task.title}`);
}

console.log(`Open tasks: ${openTasks.length}`);
console.log(`Remaining time: ${remainingMinutes} minutes`);
console.log(
  `High-priority tasks: ${openTasks.filter((task) => task.priority === "high").length}`,
);
