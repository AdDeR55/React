import React from 'react';

const TodoItem = ({ todo, index, onToggle }) => (                             //displays a single todo item
  <li className="todo-item">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => onToggle(index)}
    />
    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>                   
      {todo.text}                                     
    </span>
  </li>
);

export default TodoItem;