import React, { Component } from 'react';
import logo from './logo.svg';
import ItemList from './itemlist';
import './App.css';
import './index.css';
import moment from 'moment';

class App extends Component {
  state ={
    //make the form object 
    formData:{
      title:"",
      textline: ""
     }, 
     //array list that takes formData
    list:[],
  }
  updateForm = (event) => {
    //user input
    const newData = event.target.value
    //copy form without any values so i can use it i cant take form state dirctly
    const orignalState = this.state.formData
    const copy = Object.assign({}, orignalState);
    // to use title = name in the form
    const key = event.target.name
    //update copy with data user typed 
    copy[key]= newData
    // update state  
    this.setState({
      formData: copy
    })
  }

  addList = (event) => {
   // to prevent button clicked refresh the page 
    event.preventDefault()
   // make copy of the array
     const copy = this.state.list.slice(0)
    //add new data to the array
    copy.push(this.state.formData)
    // update the state with new copy of the array 
    this.setState({
         list: copy
         })
  }
  
  removelist = (index) =>{
   //make copy of the array
   const copy = this.state.list.slice(0)
    // remove one index 
    copy.splice(index,1)
    //update state 
    this.setState({
      list: copy
    })
  }
  checkbox = (index)=> {
   //make copy of the array
   const copy = this.state.list.slice(0)
    // if the index not line through make it line through otherwise empty
    if (copy[index].textline !== "line-through") {
      copy[index].textline = "line-through"
    } else {
      copy[index].textline = ""
    }
    //update state
    this.setState({
      list: copy
    })
  

  }

  render() {
    //map through array and pass the index, checkbox copy
    console.log('second', this.state.list)
    const listItems=this.state.list.map((listData, index) => { 
      return <ItemList checkbox={this.checkbox} listData={listData} removelist={this.removelist} index={index}/>;
     })
    
    return (
    
    <div className="mainform">
      <h2 className="moment">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
          <header><h1> -TODOS- </h1></header>
         
        <form onSubmit={this.addList}>
          <input className="input" type='text' name='title' placeholder="Things need to be done" onChange={this.updateForm} value={this.state.formData.title}></input>
          <button className="btnadd" type='submit'>Add</button>
        </form>

        {listItems} 
    </div>  );
  }
}
export default App;