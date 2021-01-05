import React,{Component} from 'react'
import './App.css';
import utils from './Utils'

class UserComp extends Component
{
  constructor()
  {
    super()
    this.state = {user:{}}
  }

  

  render()
  {
    
    return (
      <div style={{backgroundColor:'pink' ,borderStyle:'solid', width: '300px'}}>
       ID: {this.props.id}<br/>
       Name: {this.props.name}<br/>
       Email: {this.props.email}<br/>
      </div>
    )
  }
}


export default UserComp;
