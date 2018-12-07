import Axios from 'axios'
import { IScanner } from 'anymentionofit/scanners'

export const getScanners = async (): Promise<IScanner[]> => {
  try {
    const response = await Axios.get(`/scanners`)
    return response.status === 200 ? response.data : response.statusText
  } catch (error) {
    return error
  }
}
