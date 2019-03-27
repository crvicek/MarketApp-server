import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsNotEmpty, IsString, Length, MinLength, IsEmail } from 'class-validator'
import { Exclude } from 'class-transformer'
import * as bcrypt from 'bcrypt'
import Ad from '../ads/entity';

@Entity()
export default class User extends BaseEntity {

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
    this.admin = false
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(3, 15)
  @Column('text')
  username: string

  @IsNotEmpty()
  @IsEmail()
  @Column('text', { nullable: false })
  email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  @Column('text', { select: false, default: 'false' })
  admin: boolean

  @OneToMany(_type => Ad, ad => ad.userId)
  ads: Ad[]
}