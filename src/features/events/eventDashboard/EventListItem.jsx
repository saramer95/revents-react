import React from 'react';
import { Icon, Item, ItemGroup, Segment, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';


export default function EventListItem({event}) {
    return(
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{event.date}
                    <Icon name='marker' />{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map( attendee => (
                        <EventListAttendee key={attendee.id} attendee={attendee} ></EventListAttendee>
                    ))}
                   
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button color='teal' floated='right' content='View'></Button>
            </Segment>
        </Segment.Group>
    );  
}