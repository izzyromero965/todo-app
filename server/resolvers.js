import Todo from "./models/Todo.js";

const resolvers = {
  Query: {
    welcome: () => "Welcome to todo app",
    getTodos: async () => {
      const todos = await Todo.find();
      return todos;
    },
    getTodo: async (root, args) => {
      const todo = await Todo.findById(args.id);
      return todo;
    },
  },
  Mutation: {
    createTodo: async (root, args) => {
      const newTodo = new Todo({
        title: args.title,
        details: args.details,
        date: args.date,
      });

      await newTodo.save();
      return newTodo;
    },
    deleteTodo: async (root, args) => {
      await Todo.findByIdAndDelete(args.id);
      return "Todo deleted successfully";
    },
    updateTodo: async (root, args) => {
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
      const todo = await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

      return todo;
    },
  },
};

export default resolvers;
