
import { Request, Response } from 'express'

const prod = {
  format: 'common'
}

const dev = {
  format: 'dev'
}

const config = process.env.NODE_ENV === 'production'
  ? prod
  : dev

export const morganLogger = {
  ...config,
  stderrOpts: {
    stream: process.stderr,
    skip: function (req: Request, res: Response) {
      return res.statusCode ? res.statusCode < 400 : false
    }
  },
  stdoutOpts: {
    stream: process.stdout,
    skip: function (req: Request, res: Response) {
      return res.statusCode ? res.statusCode >= 400 : false
    }
  }
}

