import { EntityRepository, Repository } from 'typeorm';
import { Client } from '../client/client.entity';
import { Phone } from '../local/phone.entity';
import { ClientPhone } from './client-phone.entity';

@EntityRepository(ClientPhone)
export class ClientPhoneRepository extends Repository<ClientPhone> {
  async saveFromClient(client: Client, phone: Phone) {
    console.log('************** ClientPhoneRepository **************');
    const newFromClient = Object.assign(new ClientPhone(), {
      client,
      phone,
    });
    try {
      // TODO: Check if phone already exist
      await this.save(newFromClient);
    } catch (error) {
      throw error;
    }
  }
}
