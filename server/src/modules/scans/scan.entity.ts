import { 
  Entity, Column, PrimaryGeneratedColumn, 
  JoinTable, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Scanner } from '../scanners/scanner.entity';
import { Frequency } from '../frequencies/frequency.entity';
import { Result } from '../results/result.entity';
import { Topic } from '../topics/topic.entity';

@Entity()
export class Scan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToOne(type => Scanner, scanner => scanner.scans)
  scanner: Scanner;

  @OneToMany(type => Result, result => result.scan)
  results: Result[]

}