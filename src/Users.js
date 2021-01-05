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
    this.state = {users:[]}
  }

  async componentDidMount() {
    let resp = await utils.getAllItems("https://jsonplaceholder.typicode.com/users")
    let data = resp.data
    this.setState({users: data})
  }

  render()
  {
    let items = this.state.users.map((item)=>{
      return <div key={item.id}><UserComp id={item.id} name={item.name} email={item.email}/><br/></div>
    })
    return (
      <div style={{borderStyle:'solid', borderColor:'blue'}}>
        Searsh: <input type="text"/>
        <input type="button" value="Add"/>
        {items}
      </div>
    )
  }
}


export default UsersComp;
