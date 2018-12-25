import React from 'react'
import { connect } from 'react-redux'
import { NotificationDropdown } from '../components'
import {
  INotification,
  INotificationsState
} from 'anymentionofit/notifications'
import { resetUnseenCount, topNotificationSelector } from '../actions'

interface IProps {
  notificationList: INotification[]
  unseenCount: number
  resetUnseenCount: Function
  topNotificationSelector: Function
}

interface IState {
  notifications: INotificationsState
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

  toggle = () => {
    if (!this.state.isOpen === false) this.props.resetUnseenCount()
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isOpen } = this.state
    console.log(this.props)
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
    ...state.notifications,
    topNotifications: topNotificationSelector(state.notifications)
  }
}

export default connect(
  mapStateToProps,
  { resetUnseenCount, topNotificationSelector }
)(NotificationDropdownContainer)
