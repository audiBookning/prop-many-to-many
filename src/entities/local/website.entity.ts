import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientWebsite } from '../local-manytomany/client-website.entity';

@Entity()
export class Website extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // OneToMany

  @OneToMany(() => ClientWebsite, (clientWebsite) => clientWebsite.website)
  clientWebsite: ClientWebsite[];

  // ************

  @Column('text')
  website: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
