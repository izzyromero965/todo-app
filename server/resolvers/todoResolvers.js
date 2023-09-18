import Todo from "../models/Todo.js";

export async function getTodos(root, args, context) {
  const todos = await Todo.find();
  return todos;
}

export async function getTodo(root, args) {
  const todo = await Todo.findById(args.id);
  return todo;
}

export async function createTodo(root, args) {
  const newTodo = new Todo({
    title: args.title,
    details: args.details,
    date: args.date,
  });

  await newTodo.save();
  return newTodo;
}

export async function deleteTodo(root, args) {
  await Todo.findByIdAndDelete(args.id);
  return "Todo deleted successfully";
}

export async function updateTodo(root, args) {
  const { id, title, details, date } = args;
  const updatedTodo = {};
  if (title) {
    updatedTodo.title = title;
  }
  if (details) {
    updatedTodo.details = details;
  }
  if (date) {
    updatedTodo.date = date;
  }
  const todo = await Todo.findByIdAndUpdate(id, updatedTodo, {
    new: true,
  });

  return todo;
}

export default {
  Query: {
    getTodos,
    getTodo,
  },
  Mutation: {
    createTodo,
    deleteTodo,
    updateTodo,
  },
};
