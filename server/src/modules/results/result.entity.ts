import { 
  Entity, Column, PrimaryGeneratedColumn, 
  JoinTable, ManyToOne } from 'typeorm';
import { Scan } from '../scans/scan.entity';
import { Topic } from '../topics/topic.entity';
import { Frequency } from '../frequencies/frequency.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  raw: Object;

  @ManyToOne(type => Scan, scan => scan.results)
  scan: Scan;

  @ManyToOne(type => Topic, topic => topic.results)
  topic: Topic;

  @ManyToOne(type => Frequency, frequency => frequency.results)
  frequency: Frequency;
}