import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { loadTasks, saveTasks } from "./task-store.js";
import { TaskTracker, type Priority } from "./task-tracker.js";

const terminal = createInterface({ input, output });
const tracker = new TaskTracker(await loadTasks());

function parsePositiveNumber(text: string): number | undefined {
  const value = Number(text);
  return Number.isFinite(value) && value > 0 ? value : undefined;
}

function parsePriority(text: string): Priority | undefined {
  const value = text.trim().toLowerCase();
  return value === "low" || value === "medium" || value === "high" ? value : undefined;
}

async function addTask(): Promise<void> {
  const title = (await terminal.question("Task title: ")).trim();
  if (!title) return console.log("Enter a task title.");

  const minutes = parsePositiveNumber(await terminal.question("Estimated minutes: "));
  if (minutes === undefined) return console.log("Enter a number greater than zero.");

  const priority = parsePriority(await terminal.question("Priority (low, medium, high): "));
  if (!priority) return console.log("Choose low, medium, or high.");

  const task = tracker.addTask(title, minutes, priority);
  await saveTasks(tracker.getAllTasks());
  console.log(`Added task #${task.id} and saved it.`);
}

async function completeTask(): Promise<void> {
  const id = parsePositiveNumber(await terminal.question("Task id: "));
  if (id === undefined || !Number.isInteger(id)) return console.log("Enter a whole-number task id.");
  if (!tracker.completeTask(id)) return console.log(`Task #${id} was not found.`);
  await saveTasks(tracker.getAllTasks());
  console.log("Task completed and saved.");
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
      for (const task of tasks) console.log(`#${task.id} [${task.priority}] ${task.title} (${task.estimatedMinutes} min)`);
    } else if (command === "summary") {
      const summary = tracker.getSummary();
      console.log(`${summary.openCount} open task(s), ${summary.remainingMinutes} minutes remaining.`);
    } else console.log("Choose add, list, complete, summary, or quit.");
  }
}

try {
  await run();
} catch (error) {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`The task tracker could not continue: ${message}`);
} finally {
  terminal.close();
}
