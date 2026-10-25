type Priority = "low" | "medium" | "high";

interface Task {
  id: number;
  title: string;
  estimatedMinutes: number;
  completed: boolean;
  priority: Priority;
}

const tasks: Task[] = [
  { id: 1, title: "Prepare meeting notes", estimatedMinutes: 30, completed: false, priority: "high" },
  { id: 2, title: "Reply to project email", estimatedMinutes: 15, completed: true, priority: "medium" },
  { id: 3, title: "Review weekly metrics", estimatedMinutes: 45, completed: false, priority: "high" },
];

const openTasks = tasks.filter((task) => !task.completed);
const remainingMinutes = openTasks.reduce(
  (total, task) => total + task.estimatedMinutes,
  0,
);

for (const task of openTasks) {
  console.log(`#${task.id} [${task.priority}] ${task.title}`);
}

console.log(`Open tasks: ${openTasks.length}`);
console.log(`Remaining time: ${remainingMinutes} minutes`);
console.log(
  `High-priority tasks: ${openTasks.filter((task) => task.priority === "high").length}`,
);
