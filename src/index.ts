// SESSION 2 SCAFFOLD
// The Session 1 program still works. Follow the TODOs to make it handle many tasks.

// TODO 1: Replace each single task value with an array of values.

// TODO 2: Create matching arrays for estimates and completion statuses.

// TODO 3: Add a for loop that visits every array position.

// TODO 4: For each task, add some "done" status to a completed task title.

// TODO 5: Track total openTaskCount and remainingMinutes metrics.

// TODO 6: Update complettions to be accurate with time worked vs time estimated.

// TODO 7: Print out All Tasks and Statuses

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
