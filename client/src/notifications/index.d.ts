declare module 'anymentionofit/notifications' {
  export interface INotificationsState {
    notificationList: Array<any>
    channelStatus: string
    serverStatus: string
  }

  export interface INotification {
    entityId: number
    entity: string
    message: string
  }
}
