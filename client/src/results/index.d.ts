declare module "anymentionofit/results" {
  interface IBaseAction {
    type: string
  }

  export interface IResult {}

  export interface IResultSuccessAction {
    type: 'FETCH_RESULT_BY_ID_SUCCESS'
    result?: object
  }

  export interface IResultSuccess extends IBaseAction {
    result: object
  }

}
