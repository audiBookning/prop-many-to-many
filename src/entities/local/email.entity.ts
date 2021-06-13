import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientEmail } from '../local-manytomany/client-email.entity';

@Entity()
export class Email extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  details: ClientEmail;

  // ************
  // OneToMany

  @OneToMany(() => ClientEmail, (clientEmail) => clientEmail.email)
  clientEmail: ClientEmail[];

  // ************

  @Column('text')
  email: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
