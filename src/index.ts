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
