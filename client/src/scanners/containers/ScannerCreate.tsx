import React, { FormEvent, ComponentState } from 'react'
import { connect } from 'react-redux'
import { createScannerRequest } from '../actions'
import ScannerForm from '../components/ScannerCreate/Form'
import { IScanner } from 'anymentionofit/scanners'
import { RouteComponentProps } from 'react-router'

interface IProps extends RouteComponentProps {
  createScannerRequest: Function
}

interface IState {}

class AsyncScannerForm extends React.Component<IProps, ComponentState> {
  constructor(props: IProps) {
    super(props)
    this.state = { error: false }
  }
  handleSubmit = () => {
    const data =
      this.state && this.state.name && this.state.topic
        ? {
            name: this.state.name,
            topics: [
              {
                name: this.state.topic
              }
            ]
          }
        : false
    return data
      ? this.props.createScannerRequest(data, this.props.history.push)
      : this.setState({ error: true })
  }

  handleChange = async (event: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event
    const value =
      currentTarget.type === 'checkbox'
        ? currentTarget.checked
        : currentTarget.value
    const { name } = currentTarget
    await this.setState({
      [name]: value,
      error: false
    })
  }
  render() {
    return (
      <ScannerForm
        error={this.state.error}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default connect(
  undefined,
  { createScannerRequest }
)(AsyncScannerForm)
