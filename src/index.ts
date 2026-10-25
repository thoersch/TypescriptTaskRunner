// SESSION 4 SCAFFOLD
// The functions work, but related task values still live in separate arrays.

// TODO 1: Define a Priority union type with low, medium, and high values.

// TODO 2: Define a Task interface with id, title, estimatedMinutes,
// completed, and priority properties.

// TODO 3: Replace the three parallel arrays with one Task[] array.

// TODO 4: Use filter to create an openTasks array.

// TODO 5: Use reduce to calculate remaining minutes from openTasks.

// TODO 6: Add a filtered count of open high-priority tasks.

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
