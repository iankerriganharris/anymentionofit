import { Inject } from '@nestjs/common'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Result } from '../results/result.entity'
import { Scan } from '../scans/scan.entity'
import * as constants from './frequency.constants'
import { IFrequencyClient } from './interfaces'
import { Reddit } from './reddit.entity'
import { Twitter } from './twitter.entity'

@Entity()
export class Frequency {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 100 })
  public name: string

  @OneToMany(type => Result, result => result.frequency)
  public results: Result[]

  /**
   * client
   */
  get client(): IFrequencyClient {
    switch (this.name) {
      case constants.REDDIT:
        return new Reddit()
      case constants.TWITTER:
        return new Twitter()
    }
  }
}
