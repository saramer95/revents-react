import React from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm({setFormOpen}) {
    return (
        <Segment clearing>
            <Header content='Create New Event'></Header>
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event title'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City'></input>
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue'></input>
                </Form.Field>
                <Form.Field>
                    <input type='Date' placeholder='Date'></input>
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button onClick={ () => setFormOpen(false) }type='submit' floated='right' content='Cancel' />
            </Form>
        </Segment> 
    );
}