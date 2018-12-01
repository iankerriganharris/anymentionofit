import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Reddit } from './reddit.entity';
import { IFrequencyClient } from './interfaces';
import { Twitter } from './twitter.entity';
import * as constants from './frequency.constants';

@Entity()
export class Frequency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  /**
   * client
   */
  public client(): IFrequencyClient {
    switch(this.name) {
      case constants.REDDIT:
        return new Reddit;
      case constants.TWITTER:
        return new Twitter;
    }
  }
}