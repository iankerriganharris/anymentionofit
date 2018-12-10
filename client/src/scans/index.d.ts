declare module "anymentionofit/scans" {
  interface IBaseAction {
    type: string
  }

  export interface IScan {
    id: number
    name: string
    results: {
      id: string
      raw: object
      topic: {
          id: string
          name: string
      },
      frequency: {
          id: string
          name: string
      }
    }[]
    scanner: {
      id: string
      name: string
    }
  }

  export interface IScanSuccessAction {
    type: 'FETCH_SCAN_BY_ID_SUCCESS'
    scan?: object
  }

  export interface IScanSuccess extends IBaseAction {
    scan: object
  }

}
