import React,{Component} from 'react'
import './App.css';
import TaskComp from './Task'

class UserComp extends Component
{
  constructor()
  {
    super()
    this.state = {id: 0 , name:'',email: '',
    isOtherData:false,street:'', city: '', zipcode:'',isSelect:false}
  }

  componentDidMount() 
  {
    this.setState({id:this.props.id})
    this.setState({name:this.props.name})
    this.setState({email:this.props.email})
    this.setState({street:this.props.address.street})
    this.setState({city:this.props.address.city})
    this.setState({zipcode:this.props.address.zipcode})
  }

  updateData = () =>
  {
    let obj = { id:this.state.id,name:this.state.name,email: this.state.email,
       address:{street:this.state.street, city:this.state.city, zipcode:this.state.zipcode} }
    this.props.update(obj)
  }

  deleteData = () =>
  {
    this.props.delete(this.state.id)
  }
  
  render()
  {
    let styleUser;
    let userTodos;
    let userPosts;
    
    if (this.state.isSelect) {
      styleUser = {backgroundColor:'orange',borderStyle: 'solid', borderColor:'yellow' , width: '300px'}
      userTodos=<div style={{width:'550px'}}>
        Todos User {this.state.id}:<br/>
        <input style={{backgroundColor:'orange'}} type="button" value="Add"/>
        <div style={{borderStyle:'solid', backgroundColor:'orange'}}>
          {this.props.todos.map((todo,index)=>
          {
            return <div key={index}><TaskComp todo={todo}/><br/></div>
          })}
        </div>
      </div>
      userPosts=null
    }
    else{
      userTodos = null;
      userPosts = null;
      (this.props.todos.map(todo => todo.completed).indexOf(false)==-1 ?
      styleUser={backgroundColor:'greenyellow',borderStyle: 'solid', borderColor:'green' , width: '300px'}:
      styleUser={backgroundColor:'pink',borderStyle: 'solid', borderColor:'red', width: '300px'})
    }
    

    let address
    this.state.isOtherData? address=<div style={{borderStyle:'solid'}}>
      Street:
        <input type='text' value={this.state?.street} onChange={e=>this.setState({street:e.target.value})}/>
        <br/>
      City:
        <input type='text' value={this.state?.city} onChange={e=>this.setState({city:e.target.value})}/><br/>
      Zip Code:
        <input type='text' value={this.state?.zipcode} onChange={e=>this.setState({zipcode:e.target.value})}/>
    </div>:address=null 

    return (
      <div>
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
            <input type="button" value="Delete" onClick={this.deleteData}/>
            </div>
            {userTodos}
            {userPosts}
      </div>       
    )
  }
}


export default UserComp;
