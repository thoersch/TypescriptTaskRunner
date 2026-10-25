import type { Task } from "./task-tracker.js";

// SESSION 8 SCAFFOLD
// TODO 1: Import readFile and writeFile from node:fs/promises.

// TODO 2: Create a URL for ../tasks.json relative to this module.

export async function loadTasks(): Promise<Task[]> {
  // TODO 3: Read the file as UTF-8 text and parse its JSON.
  // TODO 4: Return [] only when the file is missing; rethrow other errors.
  return [];
}

export async function saveTasks(tasks: Task[]): Promise<void> {
  // TODO 5: Convert tasks to indented JSON and write the file.
  void tasks;
}

// TODO 6: Add an isMissingFileError(error: unknown) type guard.
