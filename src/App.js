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
  const state={
    items:[{id:1, title:'wake up'}, {id:2, title:'make breakfast'}],
    id: uuidv4(),
    item:'', 
    editItem:false
  };

  handleChange = (e)=>{console.log('handle change')}

  handleSubmit = (e)=>{console.log('handle submit')}

  clearList = (e)=>{console.log('clear list')}

  handleEdit = (e)=>{console.log(`handle edit ${id}`)}

  handleDelete = (id)=>{console.log(`handle delete ${id}`)}


  return (
    <div >
      <div className="container">
        <div className="row">
          <div className= "col-10.mx-auto.col-md-8.mt-5">
          <h3 className="text-capitalized text-center">
            todo input
          </h3>
            </div>
              <TodoInput item={this.state.item} 
              handleChange= {this.handleChange} 
              handleSubmit= {this.handleSubmit} 
              editItem={this.state.editItem}
              />
              <TodoList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}
              />


        </div>
      </div>
    </div>
  );
}

export default App;
