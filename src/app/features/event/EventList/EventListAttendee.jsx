import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'


export class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image as='a' size='mini' circular src='assets/62.jpg'/>
            </List.Item>
        )
    }
}

export default EventListAttendee
