import io from 'socket.io-client'
import { eventChannel, delay } from 'redux-saga'
import { take, call, put, fork, race, cancelled } from 'redux-saga/effects'
import * as types from './types'
import {
  INotificationsState,
  INotification
} from 'anymentionofit/notifications'
import { createSelector } from 'reselect'

const {
  CHANNEL_ON,
  CHANNEL_OFF,
  ADD_NOTIFICATION,
  SERVER_OFF,
  SERVER_ON,
  STOP_CHANNEL,
  RESET_UNSEEN,
  CLEAR_NOTIFICATIONS
} = types

const socketServerURL = ''

// action creators
export const resetUnseenCount = () => ({ type: RESET_UNSEEN })
export const clearNotifications = () => ({ type: CLEAR_NOTIFICATIONS })

// sorting function to show the latest notifications first
const sortNotifications = (
  notification1: INotification,
  notification2: INotification
) => notification2.id - notification1.id

// selector to get only first 5 latest notifications
const notificationSelector = (state: INotificationsState) =>
  state.notificationList
const topNotification = (
  allNotifications: INotificationsState['notificationList']
) => allNotifications.sort(sortNotifications).slice(0, 5)
export const topNotificationSelector = createSelector(
  notificationSelector,
  topNotification
)

// wrapping functions for socket events (connect, disconnect, reconnect)
let socket: SocketIOClient.Socket
const connect = () => {
  socket = io(socketServerURL)
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket)
    })
  })
}

const disconnect = () => {
  socket = io(socketServerURL)
  return new Promise(resolve => {
    socket.on('disconnect', () => {
      resolve(socket)
    })
  })
}

const reconnect = () => {
  socket = io(socketServerURL)
  return new Promise(resolve => {
    socket.on('reconnect', () => {
      resolve(socket)
    })
  })
}

// This is how channel is created
const createSocketChannel = (s: SocketIOClient.Socket) =>
  eventChannel(emit => {
    const handler = (data: any) => {
      console.log(data)
      emit(data)
    }
    s.on('newNotification', handler)
    return () => {
      s.off('newNotification', handler)
    }
  })

// connection monitoring sagas
const listenDisconnectSaga = function*() {
  while (true) {
    yield call(disconnect)
    yield put({ type: SERVER_OFF })
  }
}

const listenConnectSaga = function*() {
  while (true) {
    yield call(reconnect)
    yield put({ type: SERVER_ON })
  }
}

// Saga to switch on channel.
const listenServerSaga = function*() {
  try {
    console.log('trying')
    yield put({ type: CHANNEL_ON })
    const { timeout } = yield race({
      connected: call(connect),
      timeout: delay(2000)
    })
    if (timeout) {
      yield put({ type: SERVER_OFF })
    }
    yield call(connect)
    const socketChannel = yield call(createSocketChannel, socket)
    yield fork(listenDisconnectSaga)
    yield fork(listenConnectSaga)
    yield put({ type: SERVER_ON })
    yield put({ type: CLEAR_NOTIFICATIONS })

    while (true) {
      const payload = yield take(socketChannel)
      yield put({ payload, type: ADD_NOTIFICATION })
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('finally')
    if (yield cancelled()) {
      socket.disconnect()
      yield put({ type: CHANNEL_OFF })
    }
  }
}

// saga listens for start and stop actions
export const startStopChannel = function*() {
  while (true) {
    console.log('starting channel...')
    yield race({
      notification: call(listenServerSaga),
      cancel: take(STOP_CHANNEL)
    })
  }
}
