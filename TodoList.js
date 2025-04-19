import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => (               //component to render the list of todos
  <ul className="todo-list">
    {todos.map((todo, index) => (
      <TodoItem
        key={index}                                               // Unique key for React's reconciliation
        todo={todo}                                               // The individual todo object
        index={index}                                             // The position of the todo in the array
        onToggle={onToggle}                                       // Function to handle toggling completed state
      />
    ))}
  </ul>
);

export default TodoList;

