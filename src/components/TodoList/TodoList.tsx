import React from 'react';
import TodoItem from './TodoItem';
import data from '../../data/todos.json';
import { IData } from '../../types/Data';
import style from './Todo.module.scss';

const TodoList: React.FC = () => {
  const [todos, setTodos] = React.useState<IData[]>(data);
  const [inputValue, setInputValue] = React.useState('');

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, { id: todos.length + Math.random() * 10, title: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  return (
    <div>
      <div>
        <input placeholder="Добавить задачу" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleAddTodo}>add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
