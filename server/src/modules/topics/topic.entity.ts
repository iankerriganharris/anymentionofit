import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Scanner } from '../scanners/scanner.entity';
import { Scan } from '../scans/scan.entity';
import { Result } from '../results/result.entity';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @ManyToMany(type => Scanner)
  @JoinTable()
  scanners: Scanner[];

  @OneToMany(type => Result, result => result.topic)
  results: Result[];
}