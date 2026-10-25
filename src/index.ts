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
