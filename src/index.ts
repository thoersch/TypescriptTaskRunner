let taskTitles: string[] = [
  "Prepare meeting notes",
  "Reply to project email",
  "Review weekly metrics",
];
const estimatedMinutes: number[] = [30, 15, 45];
let minutesWorked: number[] = [30, 0, 15];
let completed: boolean[] = [false, false, false];

let openTaskCount = 0;
let remainingMinutes = 0;

for (let i = 0; i < taskTitles.length; i += 1) {
  let minutesLeft = estimatedMinutes[i] - minutesWorked[i];
  completed[i] = minutesLeft <= 0;

  if (!completed[i]) {
    openTaskCount += 1;
    remainingMinutes += minutesLeft;
  } else {
    taskTitles[i] = `${taskTitles[i]} (done)`;
  }
}

console.log("Today's Task Plan\n");
console.log(`Open tasks: ${openTaskCount}`);
console.log(`Remaining time: ${remainingMinutes} minutes\n`);

for (let i = 0; i < taskTitles.length; i++) {
    console.log(`${taskTitles[i]}`);
    console.log("----------------------");
    console.log(`Estimated Minutes: ${estimatedMinutes[i]}`);
    console.log(`Worked Minutes: ${minutesWorked[i]}`);
    console.log(`Completed: ${completed[i]}\n`);
}
