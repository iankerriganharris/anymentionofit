import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

interface IProps {
  handleSubmit: Function
  handleChange: Function
}

export default (props: IProps) => (
  <Form>
    <FormGroup>
      <Label>Name</Label>
      <Input name="name" onChange={e => props.handleChange(e)} />
    </FormGroup>
    <FormGroup>
      <Label>Topic</Label>
      <Input name="topic" onChange={e => props.handleChange(e)} />
    </FormGroup>
    <Button onClick={() => props.handleSubmit()}>Submit</Button>
  </Form>
)
