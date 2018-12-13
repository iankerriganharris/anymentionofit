declare module 'anymentionofit/results' {
  interface IBaseAction {
    type: string
  }

  export interface IResult {
    id: string
    raw: object
    scan: {
      id: string
      name: string
      scanner: {
        id: string
        name: string
      }
    }
    frequency: {
      id: string
      name: string
    }
    topic: {
      id: string
      name: string
    }
  }

  export interface IResultSuccessAction {
    type: 'FETCH_RESULT_BY_ID_SUCCESS'
    result?: object
  }

  export interface IResultSuccess extends IBaseAction {
    result: object
  }
}
