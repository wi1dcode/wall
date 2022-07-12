import React from 'react'
import users from './users.json'
import Card from './components/Card'
import "./index.css"

class App extends React.Component {
  render() {    
    return (
      <ul className='row mt-1 gy-5 d-flex justify-content-center'>
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