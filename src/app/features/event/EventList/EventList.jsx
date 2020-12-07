/* this is left side of an event dashboard it is a component for displaying  event  */
import React, { Component } from 'react'
import EventListItem  from './EventListItem'


export class EventList extends Component {
    render() {

        const { events, onEventOpen } = this.props;

        return (
          <div>
            <h1>Event List</h1>
            {events.map((event) => (
              <EventListItem
                key={event.id}
                event={event}
                onEventOpen={onEventOpen}
              />
            ))}
          </div>
        );
    }
}

export default EventList
