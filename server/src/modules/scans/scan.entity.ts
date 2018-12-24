import { Column, Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Frequency } from '../frequencies/frequency.entity'
import { Result } from '../results/result.entity'
import { Scanner } from '../scanners/scanner.entity'
import { Topic } from '../topics/topic.entity'

@Entity()
export class Scan {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 100 })
  public name: string

  @ManyToOne(type => Scanner, scanner => scanner.scans, { onDelete: 'CASCADE' })
  public scanner: Scanner

  @OneToMany(type => Result, result => result.scan)
  public results: Result[]
}
