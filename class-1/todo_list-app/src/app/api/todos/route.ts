import { NextRequest, NextResponse } from "next/server";

import { connect } from "@/dbConfig/db";

import Todo from "@/models/todo";
import { v4 } from "uuid";

connect();

export async function GET(request: NextRequest) {
  try {
    const todos = await Todo.find({});
    console.log(todos);

    return NextResponse.json({ msg: "Found all todos", success: true, todos });
  } catch {
    return NextResponse.json({ msg: "Issue happened" }, { status: 500 });
  }
}
