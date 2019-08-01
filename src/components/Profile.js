import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Profile extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <div className="profile-form">
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Name' placeholder='Name' />
            <Form.Field control={Input} label='Date of Birth' placeholder='MM/DD/YY' />
            <Form.Field control={Input} label='Locations' placeholder='Locations' />
            {/* <Form.Field control={Select} label='Gender' options={options} placeholder='Gender' /> */}
          </Form.Group>
          <Form.Group inline>
            <label>Gender</label>
            <Form.Field
              control={Radio}
              label='Male'
              value='1'
              checked={value === '1'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Female'
              value='2'
              checked={value === '2'}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Radio}
              label='Other'
              value='3'
              checked={value === '3'}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field control={TextArea} label='About' placeholder='Tell us more about you...' />
          <Form.Field control={Checkbox} label='I agree to the Terms and Conditions' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    )
  }
}

export default Profile; 
