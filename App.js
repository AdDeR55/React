import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleComplete} />
    </div>
  );
}

export default App;