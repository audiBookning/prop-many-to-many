import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { Client } from '../client/client.entity';
import { Phone } from '../local/phone.entity';

@Entity()
export class ClientPhone extends BaseEntity {
  // ************
  // ManyToOne

  @ManyToOne(() => Client, (client) => client.clientPhone, { primary: true })
  client: Client;

  @ManyToOne(() => Phone, (email) => email.clientPhone, { primary: true })
  phone: Phone;

  // ************

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  // ************

  @Column({ default: false })
  iSMain: boolean;

  // ************

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
