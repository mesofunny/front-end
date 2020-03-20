import React, { Component } from 'react';
import { Button, Form, Input, Radio, TextArea } from 'semantic-ui-react';
import HomePage from './HomePage';
import { JokeListHeading } from './StyledWidgets';

class Profile extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <> 
      <HomePage/>
      <h2 style={JokeListHeading}>Profile</h2>
      <div className="profile-form">
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Name' placeholder='Name' />
            <Form.Field control={Input} label='Date of Birth' placeholder='MM/DD/YY' />
            <Form.Field control={Input} label='Locations' placeholder='Locations' />
            {/* <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' /> */}
          </Form.Group>
          <Form.Group inline>
            <Form.Field control={Input} label='Email' placeholder='Email' />
            <label>Gender</label>
            <Form.Field
              control={Radio}
              label='M'
              value='1'
              checked={value === '1'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='F'
              value='2'
              checked={value === '2'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='X'
              value='3'
              checked={value === '3'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field control={TextArea} label='Bio' placeholder='Tell us more about you...' />
          <Form.Group inline>
            <label>Make Profile Public?</label>
            <Form.Field control={Radio} label='Yes.' />
            <Form.Field control={Radio} label='No.' />
          </Form.Group>
          
          <Form.Field control={Button}>Save</Form.Field>
        </Form>
      </div>
    </>
    )
  }
}

export default Profile; 
