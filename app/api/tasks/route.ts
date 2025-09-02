import { NextRequest, NextResponse } from "next/server";
import { getTasks, addTask } from "../../../lib/tasks";

export async function GET() {
  const tasks = getTasks();
  return NextResponse.json(tasks);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { title, description } = body;

  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return NextResponse.json(
      { error: "Title is required and must be a non-empty string" },
      { status: 400 }
    );
  }

  if (description && typeof description !== "string") {
    return NextResponse.json(
      { error: "Description must be a string" },
      { status: 400 }
    );
  }

  const newTask = addTask({
    title: title.trim(),
    description: description?.trim(),
    done: false,
  });

  return NextResponse.json(newTask, { status: 201 });
}
