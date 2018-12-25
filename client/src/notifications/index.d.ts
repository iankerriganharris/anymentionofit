declare module 'anymentionofit/notifications' {
  export interface INotificationsState {
    notificationList: Array<INotification>
    unseenCount: number
    channelStatus: string
    serverStatus: string
  }

  export interface INotification {
    id: number
    entityId: number
    entity: string
    message: string
    isNew?: boolean
  }
}
