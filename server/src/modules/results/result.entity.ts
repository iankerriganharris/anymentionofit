import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Frequency } from '../frequencies/frequency.entity'
import { Scan } from '../scans/scan.entity'
import { Topic } from '../topics/topic.entity'

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  public id: number

  @Column('jsonb')
  public raw: Object

  @ManyToOne(type => Scan, scan => scan.results)
  public scan: Scan

  @ManyToOne(type => Topic, topic => topic.results)
  public topic: Topic

  @ManyToOne(type => Frequency, frequency => frequency.results)
  public frequency: Frequency
}
