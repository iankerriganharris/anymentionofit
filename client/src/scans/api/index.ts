import Axios from 'axios'

export const getScanById = async (id: string): Promise<object> => {
  try {
    const response = await Axios.get(`/scans/${id}`)
    return response.status === 200 ? response.data : response.statusText
  } catch (error) {
    return error
  }
}
