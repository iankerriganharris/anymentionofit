import { 
  Entity, Column, PrimaryGeneratedColumn, 
  ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Topic } from '../topics/topic.entity';
import { Frequency } from '../frequencies/frequency.entity';
import { Scan } from '../scans/scan.entity';

@Entity()
export class Scanner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToMany(type => Topic)
  @JoinTable()
  topics: Topic[];

  @ManyToMany(type => Frequency, { eager: true})
  @JoinTable()
  frequencies: Frequency[];

  @OneToMany(type => Scan, scan => scan.scanner)
  scans: Scan[];
}