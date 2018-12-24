import React from 'react'
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap'
import { INotification } from 'anymentionofit/notifications'

interface IProps {
  notificationList: INotification[]
  isOpen: boolean
  toggle: (() => void)
}

const NotificationDropdown: React.FunctionComponent<IProps> = ({
  notificationList,
  isOpen,
  toggle
}) => (
  <Dropdown isOpen={isOpen} toggle={toggle} inNavbar>
    <DropdownToggle color="light">
      Notifications {renderBadge(notificationList.length)}
    </DropdownToggle>
    <DropdownMenu>{renderItems(notificationList)}</DropdownMenu>
  </Dropdown>
)

const renderBadge = (notificationCount: number) =>
  notificationCount > 0 ? (
    <Badge color="danger">{notificationCount}</Badge>
  ) : (
    <Badge color="secondary">{notificationCount}</Badge>
  )

const renderItems = (notificationList: IProps['notificationList']) =>
  notificationList.map(notification => (
    <DropdownItem key={notification.entityId}>
      {notification.message}
    </DropdownItem>
  ))

export default NotificationDropdown
