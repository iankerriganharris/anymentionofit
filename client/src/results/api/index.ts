import Axios from 'axios'

export const getResultById = async (id: string): Promise<object> => {
  try {
    const response = await Axios.get(`/results/${id}`)
    return response.status === 200 ? response.data : response.statusText
  } catch (error) {
    return error
  }
}
