import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import UsersComp from './Users'

class App extends Component
{
  constructor()
  {
    super()
  }

  render()
  {
    
    return (
      <div>
        <UsersComp/>
      </div>
    )
  }
}


export default App;
