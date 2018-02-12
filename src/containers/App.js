import React from 'react'
import WelcomeMsg from '../components/WelcomeMsg'
import Clock from '../components/Clock'

class App extends React.Component {

  render() {
    
    var user = "Guest";

    return (
      <div>
        <WelcomeMsg username={user} />
        <Clock />
      </div>
    )
  }

}
export default App
