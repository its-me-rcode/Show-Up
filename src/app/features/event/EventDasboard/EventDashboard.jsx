/*this is a event dashboard component where all the code for creation and calling of components are 
going to be done  */
import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../EventList/EventList";
import EventForm from "../EventForm/EventForm";

const eventsDashboard = [
  {
    //this is a data used for creating  an event
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
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
    date: "2018-03-28",
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
    selectedEvent: null,
  };
  //here we are binding our function to class so it can be used and passed from the class
  //here are other ways to bind the function to class
  //1 applying bind function to directly at the time of calling
  //2 applying the arrow function at the time of calling
  //3 applying the arrow function at the time of creating a function
  //this.handleFromOpen = this.handleFromOpen.bind(this);
  //this.handleCancel = this.handleCancel.bind(this);

  handleFromOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null,
    });
  };

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true,
    });
  };

  handleCreateEvent = (newEvent) => { 
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false,
    });
  };

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter((e) => e.id !== eventId);
    this.setState({
      events: updatedEvents,
    });
  };

  render() {
    const { selectedEvent } = this.state;
    return (
      <div>
        <Grid>
          {/* This is a grid with total size of 16 event dashboard has 10th half and event creation form has 6th half */}
          <Grid.Column width={10}>
            <EventList
              deleteEvent={this.handleDeleteEvent} 
              onEventOpen={this.handleOpenEvent}
              events={this.state.events}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleFromOpen}
              positive
              content="Create Event"
              style={{ backgroundColor: "#FCAF45", color: "white" }}
            />
            {this.state.isOpen && (
              <EventForm
                updateEvent={this.handleUpdateEvent}
                selectedEvent={selectedEvent}
                createEvent={this.handleCreateEvent}
                handleCancel={this.handleCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
