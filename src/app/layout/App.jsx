import React from 'react'
import { Container } from 'semantic-ui-react'
import EventDasboard from '../features/event/EventDasboard/EventDashboard'
import NavBar from '../features/nav/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar/>
      <Container className="main" >
      
      
      <EventDasboard/>
      
 
    </Container>
    </div>
   
  );
}

export default App;

