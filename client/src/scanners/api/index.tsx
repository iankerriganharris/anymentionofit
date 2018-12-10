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

export const getScannerById = async (id: string): Promise<IScanner> => {
  try {
    const response = await Axios.get(`/scanners/${id}`)
    console.log(response)
    return response.status === 200 ? response.data : response.statusText
  } catch (error) {
    return error
  }
}

export const postNewScanner = async (data: object): Promise<IScanner> => {
  try {
    const response = await Axios.post(`/scanners`, data)
    return response.status === 201 ? response.data : response.statusText
  } catch (error) {
    return error
  }
}
