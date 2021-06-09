import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientProperty } from '../local-manytomany/client-property.entity';

@Entity()
export class Property extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ************
  // OneToMany

  @OneToMany(() => ClientProperty, (clientProperty) => clientProperty.property)
  clientProperty: ClientProperty[];

  // ************

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
