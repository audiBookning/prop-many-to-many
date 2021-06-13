import { EntityRepository, Repository } from 'typeorm';
import { CreateUserPhoneDto } from '../client/dto/new-client.dto';
import { Phone } from './phone.entity';

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {
  async saveWithCheck(phone: CreateUserPhoneDto) {
    console.log('************** PhoneRepository saveWithCheck **************');
    const newEntity = Object.assign(new Phone(), { ...phone });
    try {
      // TODO: Check if entity already exist
      return this.save(newEntity);
    } catch (error) {
      throw error;
    }
  }
}
