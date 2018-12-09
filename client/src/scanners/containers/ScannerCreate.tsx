import React, { FormEvent, ComponentState } from 'react'
import { connect } from 'react-redux'
import { createScannerRequest } from '../actions'
import ScannerForm from '../components/ScannerCreate/Form'
import { IScanner } from 'anymentionofit/scanners'

interface IProps {
  createScannerRequest: Function
}

interface IState {}

class AsyncScannerForm extends React.Component<IProps, ComponentState> {
  handleSubmit = () => {
    const request = {
      name: this.state.name,
      topics: [
        {
          name: this.state.topic
        }
      ]
    }
    console.log(request)
    return this.props.createScannerRequest(request)
  }

  handleChange = async (event: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    const value = currentTarget.type === 'checkbox' ? currentTarget.checked : currentTarget.value
    const { name } = currentTarget
    await this.setState({
      [name]: value
    })
    console.log(this.state)
  }
  render() {
    return <ScannerForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
  }
}

export default connect(
  undefined,
  { createScannerRequest }
)(AsyncScannerForm)
