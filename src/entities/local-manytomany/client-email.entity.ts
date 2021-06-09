import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { Client } from '../client/client.entity';
import { Email } from '../local/email.entity';

@Entity()
export class ClientEmail extends BaseEntity {
  // ************
  // ManyToOne

  @ManyToOne(() => Client, (client) => client.clientEmail, { primary: true })
  client: Client;

  @ManyToOne(() => Email, (email) => email.clientEmail, { primary: true })
  email: Email;

  // ************

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  // ************
  @Column()
  isActive: boolean;

  @Column({ default: false })
  isMain: boolean;

  // ************

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
