"use client";
import { todo } from "node:test";
import { useState } from "react";

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([1, 2, 3]);
  return (
    <div className="flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32">
      <div className="text-2xl">Todo List Next</div>
      <div className="flex gap-2">
        <input
          className="text-xl rounded-md shadow-md"
          type="text"
          placeholder="Enter Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></input>
        <button className="text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1">
          Add
        </button>
        <button className="text-xl shadow-md bg-gray-600 text-white hover:bg-blue-500 rounded-md px-3 py-1">
          Clear
        </button>
      </div>
      <div className="">
        {todos.map((todo, index) => {
          return (
            <div className="">
              <div className="">
                <input type="checkbox" />
                <div className="">Write code</div>
              </div>
              <div className="flex gap-2">
                <button className="text-xl shadow-md bg-green-600 text-white hover:bg-blue-500 rounded-md px-3 py-1">
                  Edit
                </button>
                <button className="text-xl shadow-md bg-red-600 text-white hover:bg-blue-500 rounded-md px-3 py-1">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
