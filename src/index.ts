// SESSION 6 SCAFFOLD
// The class-based program below still runs. Turn it into an interactive loop.

// TODO 1: Import createInterface from node:readline/promises and stdin/stdout.

// TODO 2: Create a terminal interface and an empty TaskTracker.

// TODO 3: Create an async run function with a while loop.

// TODO 4: Ask for a command and use switch to handle add, list,
// complete, summary, and quit.

// TODO 5: Ask follow-up questions for add and complete.

// TODO 6: Await run() and close the terminal in a finally block.

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
