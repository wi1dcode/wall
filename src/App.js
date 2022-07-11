import React from 'react'
import users from './users.json'
import Card from './components/Card'

class App extends React.Component {
  render() {    
    return (
      <ul>
      {
          users.map((user, key)=>(
            <Card user={user} key={key}/>
          ))
      }
  </ul>
    )
  }  
}


export default App 