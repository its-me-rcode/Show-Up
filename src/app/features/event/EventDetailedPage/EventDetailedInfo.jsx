import React from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

function EventDetailedInfo({event}) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" name="info" style={{ color: "#FCAF45" }} />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" style={{ color: "#FCAF45" }} />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{event.date}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" style={{ color: "#FCAF45" }} />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              style={{ backgroundColor: "#FCAF45" }}
              size="tiny"
              content="Show Map"
            />
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
}

export default EventDetailedInfo;
