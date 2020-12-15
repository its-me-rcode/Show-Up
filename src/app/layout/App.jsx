/* This Where all of your main component's are going to be called */
// we have extensively used a css library called semantic ui for react in this build
import React from 'react'
import {Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import EventDasboard from '../features/event/EventDasboard/EventDashboard'
import NavBar from '../features/nav/NavBar/NavBar'
import EventDetailedPage from '../features/event/EventDetailedPage/EventDetailedPage'
import PeopleDashboard from "../features/event/user/PeopleDashboard/PeopleDashboard"
import UserDetailedPage from "../features/event/user/UserDetailed/UserDetailedPage"
import SettingsDashboard from "../features/event/user/Settings/SettingsDashboard"
import EventForm from "../features/event/EventForm/EventForm"
import HomePage from "../features/home/HomePage"


function App() {
  return (
    <div>
      <NavBar/>
      <Container className="main" >
        <Route exact path="/" component={HomePage}/>
        <Route path="/events" component={EventDasboard} />
        <Route path="/event/:id" component={ EventDetailedPage } />
        <Route path="/people" component={ PeopleDashboard } />
        <Route path="/profile/:id" component={ UserDetailedPage } />
        <Route path="/settings" component={ SettingsDashboard } />
        <Route path="/createEvent" component={ EventForm }/>
    </Container>
    </div>
  );
}

export default App;
