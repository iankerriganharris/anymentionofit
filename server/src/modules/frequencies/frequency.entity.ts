import { 
  Entity, Column, PrimaryGeneratedColumn,
  OneToMany } from 'typeorm';
import { Scan } from '../scans/scan.entity';
import { Inject } from '@nestjs/common';
import { Reddit } from './reddit.entity';
import { Twitter } from './twitter.entity';
import * as constants from './frequency.constants';
import { IFrequencyClient } from './interfaces';
import { Result } from '../results/result.entity';

@Entity()
export class Frequency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(type => Result, result => result.frequency)
  results: Result[];

  /**
   * client
   */
  get client(): IFrequencyClient {
    switch(this.name) {
      case constants.REDDIT:
        return new Reddit;
      case constants.TWITTER:
        return new Twitter;
    }
  }
}