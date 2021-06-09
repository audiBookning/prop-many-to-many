import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
} from 'typeorm';
import { Client } from '../client/client.entity';
import { Property } from '../local/property.entity';

@Entity()
export class ClientProperty extends BaseEntity {
  // ************
  // ManyToOne

  @ManyToOne(() => Client, (client) => client.clientProperty, { primary: true })
  client: Client;

  @ManyToOne(() => Property, (property) => property.clientProperty, {
    primary: true,
  })
  property: Property;

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
