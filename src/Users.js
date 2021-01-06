import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import utils from './Utils'
import UserComp from './User'

class UsersComp extends Component
{
  constructor()
  {
    super()
    this.state = {users:[],todos:[],posts:[]}
  }

  async componentDidMount() {
    let resp1 = await utils.getAllItems("https://jsonplaceholder.typicode.com/users")
    this.setState({users: resp1.data})
    let resp2 = await utils.getAllItems("https://jsonplaceholder.typicode.com/todos")
    this.setState({todos: resp2.data})
    let resp3 = await utils.getAllItems("https://jsonplaceholder.typicode.com/posts")
    this.setState({posts: resp3.data})
  }

  updateUser = (obj) =>
  {
    let newUsers = this.state.users
    let index = newUsers.findIndex(x => (x.id == obj.id))
    if(index>-1)
    {
      newUsers[index]={...newUsers[index],name: obj.name,email:obj.email}
    }
    this.setState({users:newUsers})
    console.log("update_User_In_DataBase")
  }

  updateUser = (id) =>
  {
    let newUsers = this.state.users
    let index = newUsers.findIndex(x => (x.id == id))
    if(index>-1)
    {
      newUsers.splice(index,1)
    }
    this.setState({users:newUsers})
    console.log("delete_User_In_DataBase")
  }

  render()
  {
    let items = this.state.users.map((item)=>{
      return <div key={item.id}><UserComp id={item.id} name={item.name} email={item.email}
       todos={this.state.todos.filter(todo=>todo.userId == item.id)}
       update={this.updateUser} delete={this.updateUser}/><br/></div>
    })
    return (
      <div style={{borderStyle:'solid', borderColor:'blue'}}>
        Searsh: <input type="text"/>
        <input type="button" value="Add"/>
        <br/><br/>
        {items}
      </div>
    )
  }
}


export default UsersComp;
