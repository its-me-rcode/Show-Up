/*this is a event dashboard component where all the code for creation and calling of components are 
going to be done  */
import React, { Component } from 'react'
import { Button, Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'

const eventsDashboard = [
  { //this is a data used for creating  an event
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27T11:00:00+00:00",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/90.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/90.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/90.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28T14:00:00+00:00",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

class EventDashboard extends Component {

  state = {
      events: eventsDashboard,
      isOpen: false,
    };
    //here we are binding our function to class so it can be used and passed from thr class
    //here are other ways to bind the function to class
    //1 applying bind function to directly at the time of calling
    //2 applying the arrow function at the time of calling
    //3 applying the arrow function at the time of creating a function
    //this.handleFromOpen = this.handleFromOpen.bind(this);
    //this.handleCancel = this.handleCancel.bind(this);
  

  handleFromOpen = () => { 
    this.setState({
      isOpen:true
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen:false
    })
  }

    render() {
        return (
          <div>
            <Grid>
              {/* This is a grid with total size of 16 event dashboard has 10th half and event creation form has 6th half */}
              <Grid.Column width={10}>
                <EventList events={this.state.events} />
              </Grid.Column>
              <Grid.Column width = {6}>
                <Button onClick={this.handleFromOpen}
                  positive
                  content="Create Event"
                  style={{ backgroundColor: "#FCAF45", color: "white" }}
                />
                {this.state.isOpen &&
                  <EventForm handleCancel={ this.handleCancel }/>}
              </Grid.Column>
            </Grid>
          </div>
        );
    }
}

export default EventDashboard


