import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Result } from '../results/result.entity'
import { Scanner } from '../scanners/scanner.entity'
import { Scan } from '../scans/scan.entity'

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 100 })
  public name: string

  @ManyToMany(type => Scanner)
  @JoinTable()
  public scanners: Scanner[]

  @OneToMany(type => Result, result => result.topic)
  public results: Result[]
}
