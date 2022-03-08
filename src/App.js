import React, { Component } from 'react';
import { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
//github test change
//this project is integrated with github, git, and netlify (connected via github)
function App() {
  this.state={
    items:[{id:1, title:'wake up'}, {id:2, title:'make breakfast'}],
    id: uuidv4(),
    item:'', 
    editItem:false
  };

  handleChange = (e)=>{console.log('handle change')}

  handleSubmit = (e)=>{console.log('handle submit')}

  clearList = (e)=>{console.log('clear list')}

  handleEdit = (e)=>{console.log('handle edit')}

  handleDelete = (id)=>{console.log(`handle edit ${id}`)}


  return (
    <div >
      <div className="container">
        <div className="row">
        .col-10.mx-auto.col-md-8.mt-4
          <TodoInput/>
          <TodoList/>


        </div>
      </div>
    </div>
  );
}

export default App;
