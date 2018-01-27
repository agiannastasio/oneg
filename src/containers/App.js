import React from 'react'
import WelcomeMsg from '../components/WelcomeMsg'

class App extends React.Component {

  render() {
    
    var user = "Guest";

    return (
      <div>
        <WelcomeMsg username={user} />
      </div>
    )
  }

}
export default App
