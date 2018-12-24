import * as types from './types'
import { AnyAction } from 'redux'

const {
  CHANNEL_ON,
  CHANNEL_OFF,
  ADD_NOTIFICATION,
  SERVER_OFF,
  SERVER_ON
} = types

const initialState = {
  notificationList: [] as any,
  channelStatus: 'off',
  serverStatus: 'unknown'
}

export default (state = initialState, action: AnyAction) => {
  const { notificationList } = state
  const updatedNotificationList = [...notificationList, action.payload]
  switch (action.type) {
    case CHANNEL_ON:
      return { ...state, channelStatus: 'on' }
    case CHANNEL_OFF:
      return { ...state, channelStatus: 'off', serverStatus: 'unknown' }
    case ADD_NOTIFICATION:
      return { ...state, notificationList: updatedNotificationList }
    case SERVER_OFF:
      return { ...state, serverStatus: 'off' }
    case SERVER_ON:
      return { ...state, serverStatus: 'on' }
    default:
      return state
  }
}
