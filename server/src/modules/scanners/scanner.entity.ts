import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Frequency } from '../frequencies/frequency.entity'
import { Scan } from '../scans/scan.entity'
import { Topic } from '../topics/topic.entity'

@Entity()
export class Scanner {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({ length: 100 })
  public name: string

  @ManyToMany(type => Topic)
  @JoinTable()
  public topics: Topic[]

  @ManyToMany(type => Frequency)
  @JoinTable()
  public frequencies: Frequency[]

  @OneToMany(type => Scan, scan => scan.scanner)
  public scans: Scan[]
}
