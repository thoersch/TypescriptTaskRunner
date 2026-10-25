// SESSION 2 SCAFFOLD
// The Session 1 program still works. Follow the TODOs to make it handle many tasks.

// TODO 1: Replace each single task value with an array of values.
// Example shape: const taskTitles: string[] = ["First task", "Second task"];

// TODO 2: Create matching arrays for estimates and completion statuses.

// TODO 3: Add a for loop that visits every array position.

// TODO 4: Inside the loop, use a conditional expression to choose "x" or " ".

// TODO 5: Add openTaskCount and remainingMinutes variables before the loop.

// TODO 6: Update those totals only when the current task is unfinished.

const taskTitle: string = "Prepare meeting notes";
const priority: string = "high";
const estimatedMinutes: number = 30;
let minutesWorked: number = 10;
let completed: boolean = false;

const minutesRemaining = estimatedMinutes - minutesWorked;
completed = minutesRemaining === 0;

console.log("TypeScript Task Tracker");
console.log(`Task: ${taskTitle}`);
console.log(`Priority: ${priority}`);
console.log(`Time remaining: ${minutesRemaining} minutes`);
console.log(`Completed: ${completed}`);
