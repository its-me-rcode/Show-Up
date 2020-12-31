import React, { Fragment } from "react";
import { Label, Segment, Item } from "semantic-ui-react";

function EventDetailedSidebar({ attendees }) {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none", backgroundColor: "#FCAF45" }}
        attached="top"
        secondary
        inverted
      >
        {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <Item.Group divided>
          {attendees &&
            attendees.map((attendee) => (
              <Item style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="violet"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image size="tiny" src={attendee.photoURL} />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3" style={{ color: "#833AB4" }}>
                    {attendee.name}
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </Item.Group>
      </Segment>
    </Fragment>
  );
}

export default EventDetailedSidebar;
