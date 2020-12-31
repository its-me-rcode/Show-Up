/*this is a event dashboard component where all the code for creation and calling of components are 
going to be done  */
import React, { Component } from "react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { deleteEvent } from "./../eventActions";
import { Grid } from 'semantic-ui-react';

const mapState = (state) => ({
  events: state.events,
});

const actions = {
  deleteEvent,
};
class EventDashboard extends Component {
  //here we are binding our function to class so it can be used and passed from the class
  //here are other ways to bind the function to class
  //1 applying bind function to directly at the time of calling
  //2 applying the arrow function at the time of calling
  //3 applying the arrow function at the time of creating a function
  //this.handleFromOpen = this.handleFromOpen.bind(this);
  //this.handleCancel = this.handleCancel.bind(this);

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <div>
        <Grid>
          {/* This is a grid with total size of 16 event dashboard has 10th half and event creation form has 6th half */}
          <Grid.Column width={10}>
            <EventList deleteEvent={this.handleDeleteEvent} events={events} />
          </Grid.Column>
          <Grid.Column width={6}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
