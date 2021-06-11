import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne
} from 'typeorm';
import { Client } from '../client/client.entity';
import { Email } from '../local/email.entity';

@Entity()
export class ClientEmail extends BaseEntity {
  // ************
  // ManyToOne

 /*  @Column({type: 'uuid'})
  clientId: string; */

  @ManyToOne(() => Client, (client) => client.clientEmail, { primary: true })
  client: Client;


/*   @Column({type: 'uuid'})
  emailId: string; */

  @ManyToOne(() => Email, (email) => email.clientEmail, { primary: true })
  email: Email;

  // ************
  @Column({ type: "timestamp", default: () => "now()"})
  startDate: Date;
  
  @Column({ type: "timestamp", default: () => "now()"})
  endDate: Date;

  // ************
  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isMain: boolean;

  // ************

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
