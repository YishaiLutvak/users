import React,{Component} from 'react'
import './App.css';
import MyContext from './MyContext'

class TaskComp extends Component
{
  constructor() {
    super();
  }

  static contextType = MyContext;

  updateCompleted = ()=>
  {
    this.context.updateCompleted(this.props.todo.id)
  }

  render()
  {
    let completedString;
    let completedButton;
    if(this.props.todo.completed) 
    {
      completedString = 'Yes'
      completedButton = null    
    }
    else
    {
      completedString = 'No'
      completedButton = <input type="button" value="Mark Completed"
       onClick={this.updateCompleted}
       style={{backgroundColor:'greenyellow'}}/>    
    } 
    return (
      <div style={{borderStyle:'solid', borderColor:'pink', backgroundColor:'lightblue', width: '500px'}}>
        Title: {this.props.todo.title}<br/>
        Completed: {completedString} <br/>
        {completedButton}
      </div>      
    )
  }
}


export default TaskComp;
