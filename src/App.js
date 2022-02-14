import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
//github test change
function App() {
  return (
    <div >
      <div className="container">
        <div className="row">

          <TodoInput></TodoInput>
          <TodoList></TodoList>


        </div>
      </div>
    </div>
  );
}

export default App;
