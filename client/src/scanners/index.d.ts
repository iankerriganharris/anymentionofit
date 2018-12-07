declare module "anymentionofit/scanners" {
  export interface IScannersRequest {
    type: string
  }

  export interface IScannersSuccess {
    scanners: object[]
    type: string
  }

  export interface IScannersError {
    type: string
  }

  export interface IScanner {
    name: string
  }

  export interface IScannerAction {
    type: 'FETCH_SCANNERS_REQUEST' | 'FETCH_SCANNERS_ERROR'
  }

  export interface IScannerSuccessAction {
    type: 'FETCH_SCANNERS_SUCCESS'
    scanners: object[]
  }
}
