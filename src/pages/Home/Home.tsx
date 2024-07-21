import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import TodoList from '../../components/TodoList/TodoList';
import style from './Home.module.scss';
const Home = () => {
  return (
    <div className={style.wrapper}>
      {/* <SearchBar /> */}
      <TodoList />
    </div>
  );
};

export default Home;
