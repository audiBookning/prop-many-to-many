import { EntityRepository, Repository } from 'typeorm';
import { CreateUserEmailDto } from '../client/dto/new-client.dto';
import { Email } from './email.entity';

@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {
  async saveWithCheck(email: CreateUserEmailDto) {
    console.log('************** EmailRepository saveWithCheck **************');
    const newEntity = Object.assign(new Email(), { ...email });
    try {
      // TODO: Check if email already exist
      return this.save(newEntity);
    } catch (error) {
      throw error;
    }
  }
}
