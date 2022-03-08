import React, { Component } from 'react';
import {v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
//github test change
//this project is integrated with github, git, and netlify (connected via github)
class App extends Component {
  
  state={
    items:[],
    id: uuidv4(),
    item:"", 
    editItem:false
  };

  handleChange = e=>{
    this.setState({
      item: e.target.value
    })
  };

  handleSubmit = e=>{
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    };
    const updatedItems = [...this.state.items, newItem]
    this.setState({
      items:updatedItems,
      item:'',
      id:uuidv4(),
      editItem:false
    },
    () =>     console.log(this.state));
  };

  clearList = e=>{console.log('clear list')};

  handleEdit = id=>{console.log(`handle edit ${id}`)};

  handleDelete = id=>{console.log(`handle delete ${id}`)};
  render() {
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
}

export default App;