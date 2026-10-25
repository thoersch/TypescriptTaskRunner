import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { TaskTracker, type Priority } from "./task-tracker.js";

const terminal = createInterface({ input, output });
const tracker = new TaskTracker();

function parsePositiveNumber(text: string): number | undefined {
  const value = Number(text);
  return Number.isFinite(value) && value > 0 ? value : undefined;
}

function parsePriority(text: string): Priority | undefined {
  const value = text.trim().toLowerCase();
  return value === "low" || value === "medium" || value === "high"
    ? value
    : undefined;
}

async function addTask(): Promise<void> {
  const title = (await terminal.question("Task title: ")).trim();
  if (!title) {
    console.log("Enter a task title.");
    return;
  }

  const minutes = parsePositiveNumber(await terminal.question("Estimated minutes: "));
  if (minutes === undefined) {
    console.log("Enter a number greater than zero.");
    return;
  }

  const priority = parsePriority(await terminal.question("Priority (low, medium, high): "));
  if (!priority) {
    console.log("Choose low, medium, or high.");
    return;
  }

  const task = tracker.addTask(title, minutes, priority);
  console.log(`Added task #${task.id}.`);
}

async function completeTask(): Promise<void> {
  const id = parsePositiveNumber(await terminal.question("Task id: "));
  if (id === undefined || !Number.isInteger(id)) {
    console.log("Enter a whole-number task id.");
    return;
  }

  console.log(tracker.completeTask(id) ? "Task completed." : `Task #${id} was not found.`);
}

async function run(): Promise<void> {
  console.log("Task Tracker Commands: add, list, complete, summary, quit");

  while (true) {
    const command = (await terminal.question("\nCommand: ")).trim().toLowerCase();

    if (command === "quit") return;
    if (command === "add") await addTask();
    else if (command === "complete") await completeTask();
    else if (command === "list") {
      const tasks = tracker.getOpenTasks();
      if (tasks.length === 0) console.log("No open tasks.");
      for (const task of tasks) {
        console.log(`#${task.id} [${task.priority}] ${task.title} (${task.estimatedMinutes} min)`);
      }
    } else if (command === "summary") {
      const summary = tracker.getSummary();
      console.log(`${summary.openCount} open task(s), ${summary.remainingMinutes} minutes remaining.`);
    } else {
      console.log("Choose add, list, complete, summary, or quit.");
    }
  }
}

try {
  await run();
} finally {
  terminal.close();
}
