import React from 'react';
import style from './Todo.module.scss';
import { IData } from '../../types/Data';

interface ITodoItemProps {
  todo: IData;
  setTodos: React.Dispatch<React.SetStateAction<IData[]>>;
}

const TodoItem: React.FC<ITodoItemProps> = React.memo(({ todo, setTodos }) => {
  const [inputValue, setInputValue] = React.useState(todo.title);
  const [isEditing, setIsEditing] = React.useState(false);
  const handleCheckboxChange = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todo.id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo,
      ),
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== todo.id));
  };

  const handleInputChange = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === todo.id ? { ...prevTodo, title: inputValue } : prevTodo)),
    );
    setIsEditing(false);
  };

  const handleCancelChange = () => {
    setInputValue(todo.title);
    setIsEditing(false);
  };

  console.log(todo.id);

  return (
    <li className={style.item}>
      {isEditing ? (
        <>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <div>
            <button style={{ marginRight: '5px' }} onClick={handleInputChange}>
              save
            </button>
            <button onClick={handleCancelChange}>cancel</button>
          </div>
        </>
      ) : (
        <>
          <div className={style.title}>
            <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => setIsEditing(true)}>
              {todo.title}
            </p>
          </div>
          <button style={{ marginLeft: '50px' }} onClick={handleDelete}>
            delete
          </button>
        </>
      )}
    </li>
  );
});

export default TodoItem;
