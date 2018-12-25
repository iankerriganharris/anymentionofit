import Axios from 'axios'
import { DoneCallback, Job } from 'bull'

export const scannerProcessor = async (job: Job, done: DoneCallback) => {
  try {
    const { data } = await Axios.get<any>(
      'http://server:5000/scanners?limitTo=ids'
    )
    data.forEach(async element => {
      await Axios.post('http://localhost:5001/queue', element)
    })
  } catch (err) {
    console.log(err)
  }
  done(null, job.data)
}

export const scanProcessor = async (job: Job, done: DoneCallback) => {
  try {
    await Axios.post('http://server:5000/scans', {
      name: Date.now(),
      scannerId: job.data.id
    })
    await Axios.post('http://server:5000/notifications', {
      entity: 'scan',
      entityId: job.data.id,
      id: job.id,
      message: 'New result'
    })
  } catch (err) {
    console.log(err)
  }
  done(null, job.data)
}
