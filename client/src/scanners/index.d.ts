declare module 'anymentionofit/scanners' {
  interface IBaseAction {
    type: string
  }

  export interface IScannersRequest extends IBaseAction {}

  export interface IScannersSuccess extends IBaseAction {
    scanners: object[]
  }

  export interface IScannersError extends IBaseAction {}

  export interface IScanner {
    id: number
    name: string
    frequencies: {
      name: string
    }[]
    scans: {
      id: string
      name: string
    }[]
  }

  export interface IScannerAction {
    type: 'FETCH_SCANNERS_REQUEST' | 'FETCH_SCANNERS_ERROR' | 'FETCH_SCANNER_BY_ID_REQUEST' | 'FETCH_SCANNER_BY_ID_ERROR'
  }

  export interface IScannerSuccessAction {
    type: 'FETCH_SCANNERS_SUCCESS' | 'FETCH_SCANNER_BY_ID_SUCCESS'
    scanners?: object[]
    scanner?: object
  }

  export interface IScannerRequest extends IBaseAction {}

  export interface IScannerSuccess extends IBaseAction {
    scanner: object
  }

  export interface IScannerError extends IBaseAction {}
}
