import React from 'react'
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade
} from 'reactstrap'
import { INotification } from 'anymentionofit/notifications'

interface IProps {
  notificationList: INotification[]
  unseenCount: number
  isOpen: boolean
  toggle: (() => void)
}

const NotificationDropdown: React.FunctionComponent<IProps> = ({
  notificationList,
  unseenCount,
  isOpen,
  toggle
}) => (
  <Dropdown isOpen={isOpen} toggle={toggle} inNavbar>
    <DropdownToggle color="light" disabled={notificationList.length === 0}>
      Notifications {renderBadge(unseenCount)}
    </DropdownToggle>
    <DropdownMenu>{renderItems(notificationList, isOpen)}</DropdownMenu>
  </Dropdown>
)

const renderBadge = (unseenCount: number) =>
  unseenCount > 0 ? (
    <Badge color="danger">{unseenCount}</Badge>
  ) : (
    <Badge color="secondary">{unseenCount}</Badge>
  )

const renderItems = (
  notificationList: IProps['notificationList'],
  isOpen: boolean
) =>
  notificationList.map((notification, i) =>
    notification.isNew && isOpen ? (
      <Fade in key={i}>
        <DropdownItem>{notification.message}</DropdownItem>
      </Fade>
    ) : (
      <DropdownItem key={i}>{notification.message}</DropdownItem>
    )
  )

export default NotificationDropdown
