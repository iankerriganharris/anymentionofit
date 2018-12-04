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
