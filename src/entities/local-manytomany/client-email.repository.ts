import { EntityRepository, Repository } from 'typeorm';
import { Client } from '../client/client.entity';
import { Email } from '../local/email.entity';
import { ClientEmail } from './client-email.entity';

@EntityRepository(ClientEmail)
export class ClientEmailRepository extends Repository<ClientEmail> {
  // TODO: Refactor this to a more general Method?
  async saveFromClient(client: Client, email: Email) {
    console.log('************** saveClientEmailEntity **************');
    const newFromClient = Object.assign(new ClientEmail(), { client, email });
    try {
      // TODO: Check if email already exist
      await this.save(newFromClient);
    } catch (error) {
      throw error;
    }
  }
}
