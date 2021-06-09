import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { Client } from '../client/client.entity';
import { Website } from '../local/website.entity';

@Entity()
export class ClientWebsite extends BaseEntity {
  // ManyToOne

  @ManyToOne(() => Client, (client) => client.clientWebsite, { primary: true })
  client: Client;

  @ManyToOne(() => Website, (website) => website.clientWebsite, {
    primary: true,
  })
  website: Website;

  // ************

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  // ************

  @Column({ default: false })
  isMain: boolean;

  // ************

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
