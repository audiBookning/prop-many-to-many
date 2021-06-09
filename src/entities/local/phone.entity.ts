import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientPhone } from '../local-manytomany/client-phone.entity';

export enum PhoneKind {
  TELEPHONE = 'TELEPHONE',
  MOBILE = 'MOBILE',
  FAX = 'FAX',
}

@Entity()
export class Phone extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ************
  // OneToMany

  @OneToMany(() => ClientPhone, (clientPhone) => clientPhone.phone)
  clientPhone: ClientPhone[];

  // ************

  @Column('text')
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: PhoneKind,
    default: PhoneKind.TELEPHONE,
  })
  phoneKind: PhoneKind;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
