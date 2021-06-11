import { Injectable } from '@nestjs/common';
import { RepoService } from '../../repos/repo.service';
import { Email } from '../local/email.entity';
import { Phone } from '../local/phone.entity';
import { Property } from '../local/property.entity';
import { Website } from '../local/website.entity';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/new-client.dto';

@Injectable()
export class ClientService {
  constructor(private repoSVC: RepoService) {}

  /*
   ****************************************************
   */

  getAllClients(): Promise<Client[]> {
    return this.repoSVC.client.find();
  }

  getClientById(id: string) {
    return this.repoSVC.client.findOne({ id });
  }

  newClient(createClient: CreateClientDto) {
    const newClient = Object.assign(new Client(), createClient);
    try {
      return this.repoSVC.client.save(newClient);
    } catch (error) {
      throw error;
    }
  }

  /*
   ****************************************************
   */

  getClientEmails(clientId: string): Promise<Email[]> {
    return this.repoSVC.emails
      .createQueryBuilder('email')
      .innerJoin(
        'client_email',
        'client_email',
        'client_email.emailId  = email.id',
      )
      .innerJoin(
        'client',
        'client',
        'client.id  = :clientId AND client_email.clientId = client.id',
        {
          clientId,
        },
      )
      .getMany();
  }

  getClientPhones(clientId: string): Promise<Phone[]> {
    return this.repoSVC.phone
      .createQueryBuilder('phone')
      .innerJoin(
        'client_phone',
        'client_phone',
        'client_phone.phoneId  = phone.id',
      )
      .innerJoin(
        'client',
        'client',
        'client.id  = :clientId AND client_phone.clientId = client.id',
        {
          clientId,
        },
      )
      .getMany();
  }

  getClientProperties(clientId: string): Promise<Property[]> {
    return this.repoSVC.property
      .createQueryBuilder('property')
      .innerJoin(
        'client_property',
        'client_property',
        'client_property.propertyId  = property.id',
      )
      .innerJoin(
        'client',
        'client',
        'client.id  = :clientId AND client_property.clientId = client.id',
        {
          clientId,
        },
      )
      .getMany();
  }

  getClientWebsites(clientId: string): Promise<Website[]> {
    return this.repoSVC.websites
      .createQueryBuilder('website')
      .innerJoin(
        'client_website',
        'client_website',
        'client_website.websiteId  = website.id',
      )
      .innerJoin(
        'client',
        'client',
        'client.id  = :clientId AND client_website.clientId = client.id',
        {
          clientId,
        },
      )
      .getMany();
  }
}
