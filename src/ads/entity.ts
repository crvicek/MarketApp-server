import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import User from '../users/entity';


@Entity()
export default class Ad extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsNotEmpty()
  @Column('text', { nullable: false })
  title: string

  @Column('text', { nullable: false })
  description: string
  
  @Column('text', { nullable: false })
  image: string
  
  @Column('text', { nullable: false })
  price: string

  @ManyToOne(_type => User, user => user.ads, { eager: true })
  userId: User

  // @OneToMany(_type => Bid, bid => bid.ad)
  // bids: Bid[]
}