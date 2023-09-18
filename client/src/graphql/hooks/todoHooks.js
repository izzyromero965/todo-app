import { useMutation, useQuery } from "@apollo/client";
import { GET_FEATURED_TODOS, GET_TODOS } from "../queries/Todo";
import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../mutations/Todo";

export const useTodos = ({ userEmail }) => {
  const {
    error,
    loading: isLoading,
    data,
  } = useQuery(GET_TODOS, {
    variables: {
      user_email: userEmail,
    },
    fetchPolicy: "cache-and-network",
  });

  const todos = data?.getTodos;

  return { error, todos, isLoading };
};

export const useFeaturedTodos = ({ userEmail }) => {
  const {
    error,
    loading: isLoading,
    data,
  } = useQuery(GET_FEATURED_TODOS, {
    variables: {
      user_email: userEmail,
    },
    fetchPolicy: "cache-and-network",
  });

  const featuredTodos = data?.getFeaturedTodos;

  return { error, featuredTodos, isLoading };
};

export const useCreateTodo = () => {
  const [createTodoMutation, { error, loading: isLoading }] =
    useMutation(CREATE_TODO);

  const createTodo = ({ title, userEmail }) => {
    createTodoMutation({
      variables: {
        title: title,
        user_email: userEmail,
      },
      update(cache, { data }) {
        updateNewTodoCache({ cache, newTodo: data.createTodo });
      },
    });
  };

  return { createTodo, error, isLoading };
};

export const useUpdateTodo = () => {
  const [updateTodoMutation, { error, loading: isLoading }] =
    useMutation(UPDATE_TODO);

  const updateTodo = ({ id, title }) => {
    updateTodoMutation({
      variables: {
        id: id,
        title: title,
      },
      update(cache, { data }) {
        updateTodoCache({ cache, newTodo: data.updateTodo });
      },
    });
  };

  return { updateTodo, error, isLoading };
};

export const useDeleteTodo = () => {
  const [deleteTodoMutation, { error, loading: isLoading }] =
    useMutation(DELETE_TODO);

  const deleteTodo = ({ id }) => {
    deleteTodoMutation({
      variables: {
        id: id,
      },
      update(cache, { data }) {
        updateDeleteTodoCache({ cache, deletedTodo: data.deleteTodo, id });
      },
    });
  };

  return { deleteTodo, error, isLoading };
};

function updateNewTodoCache({ cache, newTodo }) {
  const { getTodos } = cache.readQuery({
    query: GET_TODOS,
    variables: { user_email: newTodo.user_email },
  });

  cache.writeQuery({
    query: GET_TODOS,
    variables: { user_email: newTodo.user_email },
    data: { getTodos: [...getTodos, newTodo] },
  });
}

function updateTodoCache({ cache, newTodo }) {
  const { getTodos } = cache.readQuery({
    query: GET_TODOS,
    variables: { user_email: newTodo.user_email },
  });

  const updatedTodos = getTodos.map((todo) => {
    if (todo.id === newTodo.id) {
      return newTodo;
    }
    return todo;
  });
  cache.writeQuery({
    query: GET_TODOS,
    data: { getTodos: updatedTodos },
  });
}

function updateDeleteTodoCache({ cache, id, deletedTodo }) {
  const { getTodos } = cache.readQuery({
    query: GET_TODOS,
    variables: { user_email: deletedTodo.user_email },
  });
  const updatedTodos = getTodos.filter((todo) => todo.id !== id);
  cache.writeQuery({
    query: GET_TODOS,
    variables: { user_email: deletedTodo.user_email },
    data: { getTodos: updatedTodos },
  });
}
