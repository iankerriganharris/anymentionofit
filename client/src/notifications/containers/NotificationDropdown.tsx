import React from 'react'
import { connect } from 'react-redux'
import { NotificationDropdown } from '../components'
import { INotification } from 'anymentionofit/notifications'

interface IProps {
  notificationList: any[]
}

interface IState {
  notifications: {
    notificationList: INotification[]
  }
}

interface IContainerState {
  isOpen: boolean
}

class NotificationDropdownContainer extends React.Component<
  IProps,
  IContainerState
> {
  constructor(props: IProps) {
    super(props)
    this.state = { isOpen: false }
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state
    return (
      <NotificationDropdown
        toggle={this.toggle}
        isOpen={isOpen}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state: IState) => {
  return {
    ...state.notifications
  }
}

export default connect(mapStateToProps)(NotificationDropdownContainer)
