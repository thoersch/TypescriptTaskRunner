import { readFile, writeFile } from "node:fs/promises";
import type { Task } from "./task-tracker.js";

const DATA_FILE = new URL("../tasks.json", import.meta.url);

export async function loadTasks(): Promise<Task[]> {
  try {
    const text = await readFile(DATA_FILE, "utf8");
    return JSON.parse(text) as Task[];
  } catch (error) {
    if (isMissingFileError(error)) {
      return [];
    }
    throw error;
  }
}

export async function saveTasks(tasks: Task[]): Promise<void> {
  await writeFile(DATA_FILE, JSON.stringify(tasks, null, 2) + "\n", "utf8");
}

function isMissingFileError(error: unknown): boolean {
  return (
    error instanceof Error &&
    "code" in error &&
    (error as NodeJS.ErrnoException).code === "ENOENT"
  );
}
