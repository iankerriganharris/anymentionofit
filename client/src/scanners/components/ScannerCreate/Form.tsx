import React from 'react'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'

interface IProps {
  handleSubmit: Function
  handleChange: Function
  error: boolean
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
    <Button color="success" onClick={() => props.handleSubmit()}>
      Submit
    </Button>
    {props.error ? (
      <Alert className="mt-3" color="warning">
        Complete all fields to submit.
      </Alert>
    ) : null}
  </Form>
)
