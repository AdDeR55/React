import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {                  // input field and add button
  const [value, setValue] = useState('');         // storing the input 

  const handleSubmit = (e) => {           // handle form submission
    e.preventDefault();             // page won't reload after submisssion
    if (!value.trim()) return;        // Ignore empty or whitespaces
    onAdd(value);
    setValue('');                       // clears the input field after adding
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input                                                                        // html code
        type="text"
        value={value}
        placeholder="Add a new task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;