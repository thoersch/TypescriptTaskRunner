import { TaskTracker, type Task } from "./task-tracker.js";

const initialTasks: Task[] = [
  { id: 1, title: "Prepare meeting notes", estimatedMinutes: 30, completed: false, priority: "high" },
  { id: 2, title: "Reply to project email", estimatedMinutes: 15, completed: true, priority: "medium" },
];

const tracker = new TaskTracker(initialTasks);
tracker.addTask("Review weekly metrics", 45, "high");
tracker.completeTask(1);

for (const task of tracker.getOpenTasks()) {
  console.log(`#${task.id} [${task.priority}] ${task.title}`);
}

const summary = tracker.getSummary();
console.log(`Open tasks: ${summary.openCount}`);
console.log(`Remaining time: ${summary.remainingMinutes} minutes`);
