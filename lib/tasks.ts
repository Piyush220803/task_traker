import { Task } from "../app/types";

let tasks: Task[] = [];

export function getTasks(): Task[] {
  return [...tasks];
}

export function addTask(task: Omit<Task, "id" | "createdAt">): Task {
  const newTask: Task = {
    ...task,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  return newTask;
}

export function updateTask(
  id: string,
  updates: Partial<Omit<Task, "id" | "createdAt">>
): Task | null {
  const task = tasks.find((t) => t.id === id);
  if (!task) return null;
  const updatedTask = { ...task, ...updates };
  const index = tasks.findIndex((t) => t.id === id);
  tasks[index] = updatedTask;
  return updatedTask;
}

export function deleteTask(id: string): boolean {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
