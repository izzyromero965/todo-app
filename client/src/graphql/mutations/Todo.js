import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
  mutation createTodo($title: String, $user_email: String) {
    createTodo(title: $title, user_email: $user_email) {
      id
      title
      user_email
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID) {
    deleteTodo(id: $id) {
      user_email
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID, $title: String) {
    updateTodo(id: $id, title: $title) {
      id
      title
      user_email
    }
  }
`;
