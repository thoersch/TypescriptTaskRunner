# TypeScript Task Tracker Course

This eight-session course teaches programming through one evolving project: a command-line task tracker. Every session has a runnable, scaffolded `start` branch and a completed `end` branch.

## Before the first session

- Install [Node.js](https://nodejs.org/) version 24 or newer
- Install [Visual Studio Code](https://code.visualstudio.com/)
- Install Homebrew by running this in a terminal (cmd+space and type in 'terminal'):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- Install Git by running this in a new terminal:

```bash
brew install git
```

- Open this folder in VS Code, choose **Terminal > New Terminal**, and run:

```bash
npm install
git switch session-01-start
npm start
```

`npm install` is needed once on each computer. A terminal is the text area where you type commands and press Enter.

## Course progression

| Session | Start branch       | End branch       | Feature completed                          |
| ------- | ------------------ | ---------------- | ------------------------------------------ |
| 1       | `session-01-start` | `session-01-end` | A typed summary for one task               |
| 2       | `session-02-start` | `session-02-end` | A multi-task daily plan with totals        |
| 3       | `session-03-start` | `session-03-end` | Reusable functions for task logic          |
| 4       | `session-04-start` | `session-04-end` | Typed task objects and useful reports      |
| 5       | `session-05-start` | `session-05-end` | A `TaskTracker` class and modules          |
| 6       | `session-06-start` | `session-06-end` | An interactive commandline menu            |
| 7       | `session-07-start` | `session-07-end` | Input validation and useful error messages |
| 8       | `session-08-start` | `session-08-end` | Automatic file persistence with async code |

`course-complete` and `main` contain the finished persistent task tracker.

## Useful commands

```bash
npm start                 # Run the task tracker
git branch                # Show branches; the current one has an asterisk
git switch session-03-start
git restore src           # Discard experiments in the source folder
git diff session-03-start..session-03-end
```

If Git says a branch switch would overwrite changes, save the work elsewhere or run `git stash` first.

## Repository structure

- `src/index.ts` starts the application.
- `src/task-tracker.ts` appears when the course introduces classes.
- `src/task-store.ts` appears when the course adds file persistence.
- `SESSION.md` contains the current lesson's goals and completion checkpoint.
- `package.json` and `tsconfig.json` contain working project configuration.
