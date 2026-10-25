import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { TaskTracker } from "./task-tracker.js";

const terminal = createInterface({ input, output });
const tracker = new TaskTracker();

async function run(): Promise<void> {
  console.log("Task Tracker Commands: add, list, complete, summary, quit");

  while (true) {
    const command = (await terminal.question("\nCommand: ")).trim().toLowerCase();

    switch (command) {
      case "add": {
        const title = await terminal.question("Task title: ");
        const minutes = Number(await terminal.question("Estimated minutes: "));
        const priority = await terminal.question("Priority (low, medium, high): ");
        const task = tracker.addTask(title, minutes, priority as "low" | "medium" | "high");
        console.log(`Added task #${task.id}.`);
        break;
      }
      case "list":
        for (const task of tracker.getOpenTasks()) {
          console.log(`#${task.id} [${task.priority}] ${task.title} (${task.estimatedMinutes} min)`);
        }
        break;
      case "complete": {
        const id = Number(await terminal.question("Task id: "));
        console.log(tracker.completeTask(id) ? "Task completed." : "Task not found.");
        break;
      }
      case "summary": {
        const summary = tracker.getSummary();
        console.log(`${summary.openCount} open task(s), ${summary.remainingMinutes} minutes remaining.`);
        break;
      }
      case "quit":
        return;
      default:
        console.log("Choose add, list, complete, summary, or quit.");
    }
  }
}

try {
  await run();
} finally {
  terminal.close();
}
