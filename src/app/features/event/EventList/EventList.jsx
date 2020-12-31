/* this is left side of an event dashboard it is a component for displaying  event  */
import React, { Component } from "react";
import EventListItem from "./EventListItem";

export class EventList extends Component {
  render() {
    const { events, deleteEvent } = this.props;

    return (
      <div>
        {events.map((event) => (
          <EventListItem
            key={event.id}
            event={event}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
