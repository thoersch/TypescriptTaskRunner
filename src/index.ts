// SESSION 3 SCAFFOLD
// The plan works. The goal now is to move repeated jobs into named functions.

// TODO 1: Extract the marker decision into statusMarker(completed: boolean).

// TODO 2: Extract the total calculation into remainingMinutes(...).

// TODO 3: Create formatTask(...) and return one formatted task line.

// TODO 4: Create printPlan(...) and move the reporting loop into it.

// TODO 5: Call each function with a second example and predict its return value.

const taskTitles: string[] = [
  "Prepare meeting notes",
  "Reply to project email",
  "Review weekly metrics",
];
const estimatedMinutes: number[] = [30, 15, 45];
const completed: boolean[] = [false, true, false];

let openTaskCount = 0;
let remainingMinutes = 0;

console.log("Today's Task Plan");

for (let index = 0; index < taskTitles.length; index += 1) {
  const marker = completed[index] ? "x" : " ";
  console.log(`[${marker}] ${taskTitles[index]} (${estimatedMinutes[index]} min)`);

  if (!completed[index]) {
    openTaskCount += 1;
    remainingMinutes += estimatedMinutes[index];
  }
}

console.log(`Open tasks: ${openTaskCount}`);
console.log(`Remaining time: ${remainingMinutes} minutes`);
