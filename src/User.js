import React,{Component} from 'react'
import './App.css';
import utils from './Utils'

class UserComp extends Component
{
  constructor()
  {
    super()
    this.state = {id: 0 , name:'',email: '',todos:[]}
  }

  componentDidMount() 
  {
    this.setState({id:this.props.id})
    this.setState({name:this.props.name})
    this.setState({email:this.props.email})
    this.setState({todos:this.props.todos})
  }

  updateData = () =>
  {
    let obj = { id:this.state.id,name:this.state.name,email: this.state.email }
    this.props.update(obj)
  }

  DeleteData = () =>
  {
    this.props.delete(this.state.id)
  }
  
  render()
  {
    let styleUser
    this.state.todos.map(todo => todo.complete).indexOf(false)!==-1 ?
      styleUser={backgroundColor:'greenyellow',borderStyle: 'solid', borderColor:'green' , width: '300px'}:
      styleUser={backgroundColor:'pink',borderStyle: 'solid', borderColor:'red', width: '300px'}
    return (
      <div style={styleUser}>
        ID: {this.state?.id}<br/>
        Name: <input type='text' value={this.state?.name} onChange={e=>this.setState({name:e.target.value})}/>
        <br/>
        Email: <input type='text' value={this.state?.email} onChange={e=>this.setState({email:e.target.value})}/>
        <br/>
        <input type="button" value="Other Data" style={{backgroundColor: 'grey'}}/>
        <input type="button" value="Update" onClick={this.updateData}/>
        <input type="button" value="Delete" onClick={this.DeleteData}/>
      </div>
    )
  }
}


export default UserComp;
