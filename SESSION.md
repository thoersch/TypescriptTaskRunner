# Session 8 Start

## Build today

A persistent task tracker that loads tasks from `tasks.json` and saves every meaningful change.

## Main ideas

- file input and output
- JSON serialization
- promises and `await`
- `try` and `catch`
- separating storage from application logic

## Work in small steps

1. Create `task-store.ts` with `loadTasks` and `saveTasks`.
2. Start the tracker with loaded tasks.
3. Save after adding or completing a task.
4. Treat a missing file as an empty first run.
5. Report other file errors without losing the explanation.

## Completion checkpoint

Tasks survive an application restart, and the learner can trace the load and save operations from the CLI to the file.
