import Todo from "../models/Todo.js";

export async function getTodos(root, args) {
  const { user_email } = args;
  const todos = await Todo.find({ user_email });
  return todos;
}

export async function getFeaturedTodos(root, args) {
  const { user_email } = args;
  const todos = await Todo.find({ user_email: { $ne: user_email } }).limit(5);

  return todos;
}

export async function getTodo(root, args) {
  const todo = await Todo.findById(args.id);
  return todo;
}

export async function createTodo(root, args) {
  const newTodo = new Todo({
    title: args.title,
    user_email: args.user_email,
  });

  await newTodo.save();
  return newTodo;
}

export async function deleteTodo(root, args) {
  const deletedTodo = await Todo.findByIdAndDelete(args.id);
  return deletedTodo;
}

export async function updateTodo(root, args) {
  const { id, title } = args;

  const todo = await Todo.findByIdAndUpdate(
    id,
    { title },
    {
      new: true,
    }
  );

  return todo;
}

export default {
  Query: {
    getTodos,
    getTodo,
    getFeaturedTodos,
  },
  Mutation: {
    createTodo,
    deleteTodo,
    updateTodo,
  },
};
