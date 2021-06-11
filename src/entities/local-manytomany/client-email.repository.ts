import { EntityRepository, Repository } from 'typeorm';
import { ClientEmail } from './client-email.entity';


@EntityRepository(ClientEmail)
export class ClientEmailRepository extends Repository<ClientEmail> {}
