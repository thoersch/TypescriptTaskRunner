// SESSION 4 SCAFFOLD
// The functions work, but related task values still live in separate arrays.

// TODO 1: Define a Priority enumeration with low, medium, and high values.

// TODO 2: Define a Task class with related properties

// TODO 2.5: Add a print tasks behavior to the Task class

// TODO 3: Replace the three parallel arrays with one array of tasks

// TODO 4: Create a function to filter a task array return open tasks

// TODO 5: Create a function to calculate remaining minutes from a tasks list

// TODO 6: Create the concept of a "subtask" and update Task to support it

// TODO 7: Update calculate remaining minutes to accommodate subtasks

// TODO 8: Print the tasks list

function statusMarker(completed: boolean): string {
  return completed ? "x" : " ";
}

function remainingMinutes(
  estimates: number[],
  completionStatuses: boolean[],
): number {
  let total = 0;

  for (let index = 0; index < estimates.length; index += 1) {
    if (!completionStatuses[index]) {
      total += estimates[index];
    }
  }

  return total;
}

function formatTask(title: string, minutes: number, completed: boolean): string {
  return `[${statusMarker(completed)}] ${title} (${minutes} min)`;
}

function printPlan(
  titles: string[],
  estimates: number[],
  completionStatuses: boolean[],
): void {
  console.log("Today's Task Plan");

  for (let index = 0; index < titles.length; index += 1) {
    console.log(formatTask(titles[index], estimates[index], completionStatuses[index]));
  }

  console.log(
    `Remaining time: ${remainingMinutes(estimates, completionStatuses)} minutes`,
  );
}

const taskTitles = ["Prepare meeting notes", "Reply to project email", "Review weekly metrics"];
const estimates = [30, 15, 45];
const completionStatuses = [false, true, false];

printPlan(taskTitles, estimates, completionStatuses);
