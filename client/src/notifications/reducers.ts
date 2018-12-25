import * as types from './types'
import { AnyAction } from 'redux'
import { INotificationsState } from 'anymentionofit/notifications'

const {
  CHANNEL_ON,
  CHANNEL_OFF,
  ADD_NOTIFICATION,
  SERVER_OFF,
  SERVER_ON,
  RESET_UNSEEN,
  CLEAR_NOTIFICATIONS
} = types

const initialState: INotificationsState = {
  notificationList: [],
  channelStatus: 'off',
  serverStatus: 'unknown',
  unseenCount: 0
}

export default (state = initialState, action: AnyAction) => {
  const { notificationList, unseenCount } = state
  const updatedNotificationList = [
    ...notificationList,
    { ...action.payload, isNew: true }
  ]
  switch (action.type) {
    case CHANNEL_ON:
      return { ...state, channelStatus: 'on' }
    case CHANNEL_OFF:
      return { ...state, channelStatus: 'off', serverStatus: 'unknown' }
    case ADD_NOTIFICATION:
      return {
        ...state,
        notificationList: updatedNotificationList,
        unseenCount: unseenCount + 1
      }
    case CLEAR_NOTIFICATIONS:
      const clearedNotificationList = notificationList.filter(
        notification => notification.isNew
      )
      return {
        ...state,
        notificationList: clearedNotificationList
      }
    case RESET_UNSEEN:
      const resetNotificationList = notificationList.map(
        (notification: any) => ({
          ...notification,
          isNew: false
        })
      )
      return {
        ...state,
        notificationList: resetNotificationList,
        unseenCount: 0
      }
    case SERVER_OFF:
      return { ...state, serverStatus: 'off' }
    case SERVER_ON:
      return { ...state, serverStatus: 'on' }
    default:
      return state
  }
}
