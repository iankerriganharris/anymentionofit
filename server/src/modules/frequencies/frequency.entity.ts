import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Reddit } from './reddit.entity';
import { IFrequencyClient } from './interfaces';

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
      case 'reddit':
        return new Reddit;
    }
  }
}