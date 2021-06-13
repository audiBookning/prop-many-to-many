import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClientEmail } from '../local-manytomany/client-email.entity';
import { ClientPhone } from '../local-manytomany/client-phone.entity';
import { ClientProperty } from '../local-manytomany/client-property.entity';
import { ClientWebsite } from '../local-manytomany/client-website.entity';

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // ****************************

  @Column({ nullable: true })
  lastname?: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  foto?: string;

  // ****************************
  // OneToMany
  // ****************************
  // LOCALIZATION

  @OneToMany(() => ClientEmail, (clientEmail) => clientEmail.client)
  clientEmail: ClientEmail[];

  @OneToMany(() => ClientPhone, (clientPhone) => clientPhone.client)
  clientPhone: ClientPhone[];

  @OneToMany(() => ClientWebsite, (clientWebsite) => clientWebsite.client)
  clientWebsite: ClientWebsite[];

  @OneToMany(() => ClientProperty, (clientProperty) => clientProperty.client)
  clientProperty: ClientProperty[];

  // ****************************

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  createdAt: Date;
}
