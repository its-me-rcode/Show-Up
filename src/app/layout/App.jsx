/* This Where all of your main component's are going to be called */
// we have extensively used a css library called semantic ui for react in this build
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../features/event/EventDasboard/EventDashboard'
import NavBar from '../features/nav/NavBar/NavBar'
import EventDetailedPage from '../features/event/EventDetailedPage/EventDetailedPage'
import PeopleDashboard from "../features/event/user/PeopleDashboard/PeopleDashboard"
import UserDetailedPage from "../features/event/user/UserDetailed/UserDetailedPage"
import SettingsDashboard from "../features/event/user/Settings/SettingsDashboard"
import EventForm from "../features/event/EventForm/EventForm"
import HomePage from "../features/home/HomePage"
import TestComponent from "../features/testarea/TestComponent"


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <div>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/test" component={TestComponent} />
                <Route path="/event/:id" component={EventDetailedPage} />
                <Route path="/manage/:id" component={EventForm} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Switch>
            </Container>
          </div>
        )}
      />
    </div>
  );
}

export default App;
