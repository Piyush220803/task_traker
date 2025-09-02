# Task Tracker

A mini task tracker built with Next.js and Node.js API routes.

## Features

- Create tasks with title and optional description
- View list of tasks
- Filter by status (All, Active, Completed)
- Search by text in title or description
- Mark tasks as done/undone
- Delete tasks
- State preservation via URL parameters
- Error handling

## How to Run

1. Install Node.js
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

## Trade-offs

- Used in-memory storage, data lost on restart
- No database for simplicity
- Basic UI with Tailwind

## Improvements

- Add database for persistence
- Add user authentication
- Improve UI with more styling
- Add tests
