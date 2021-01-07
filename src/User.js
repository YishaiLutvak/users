import React,{Component} from 'react'
import './App.css';
import utils from './Utils'

class UserComp extends Component
{
  constructor()
  {
    super()
    this.state = {id: 0 , name:'',email: '',todos:[],isOtherData:false,street:'', city: '', zipcode:'',isSelect:false}
  }

  componentDidMount() 
  {
    this.setState({id:this.props.id})
    this.setState({name:this.props.name})
    this.setState({email:this.props.email})
    this.setState({todos:this.props.todos})
    this.setState({address:this.props.address})
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
    this.state.isSelect? styleUser =
      {backgroundColor:'orange',borderStyle: 'solid', borderColor:'yellow' , width: '300px'}:
    (this.state.todos.map(todo => todo.complete).indexOf(false)!==-1 ?
      styleUser={backgroundColor:'greenyellow',borderStyle: 'solid', borderColor:'green' , width: '300px'}:
      styleUser={backgroundColor:'pink',borderStyle: 'solid', borderColor:'red', width: '300px'})

    let address
    this.state.isOtherData? address=<div style={{borderStyle:'solid'}}>
      Street:
        <input type='text' value={this.state?.address.street} onChange={e=>this.setState({street:e.target.value})}/>
        <br/>
      City:
        <input type='text' value={this.state?.address.city} onChange={e=>this.setState({city:e.target.value})}/><br/>
      Zip Code:
        <input type='text' value={this.state?.address.zipcode} onChange={e=>this.setState({zipcode:e.target.value})}/>
    </div>:address=null 

    return (
      <div style={styleUser}>
        <label onClick={()=>this.setState({isSelect:!this.state.isSelect})}>ID:</label> {this.state?.id}<br/>
        Name: <input type='text' value={this.state?.name} onChange={e=>this.setState({name:e.target.value})}/>
        <br/>
        Email: <input type='text' value={this.state?.email} onChange={e=>this.setState({email:e.target.value})}/>
        <br/>
        <input type="button" value="Other Data" style={{backgroundColor: 'grey'}}
          onMouseEnter={()=>this.setState({isOtherData:true})} onClick={()=>this.setState({isOtherData:false})}/>
        {address}
        <input type="button" value="Update" onClick={this.updateData}/>
        <input type="button" value="Delete" onClick={this.DeleteData}/>
      </div>
    )
  }
}


export default UserComp;
