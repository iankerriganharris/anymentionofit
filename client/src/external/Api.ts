import Axios, { AxiosRequestConfig, AxiosError } from 'axios'
import { IScanner } from './interfaces'

export const getScanners = async (): Promise<IScanner[]> => {
  try {
    const response = await Axios.get(`/scanners`)
    return response.status === 200 ? response.data.json() : response.statusText
  } catch (error) {
    return error
  }
}
