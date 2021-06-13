import { Injectable } from '@nestjs/common';
import { RepoService } from '../../repos/repo.service';
import { Email } from '../local/email.entity';
import { Phone } from '../local/phone.entity';
import { Property } from '../local/property.entity';
import { Website } from '../local/website.entity';
import { Client } from './client.entity';

@Injectable()
export class ClientService {
  constructor(private repoSVC: RepoService) {}

  getAllClients(): Promise<Client[]> {
    return this.repoSVC.client.find();
  }

  getClientById(id: string) {
    return this.repoSVC.client.findOne({ id });
  }

  getClientEmailsDetails(clientId: string): Promise<Email[]> {
    console.log(
      '************** ClientService getClientEmailsDetails **************',
    );
    return this.repoSVC.emails
      .createQueryBuilder('email')
      .leftJoinAndMapMany(
        'email.details',
        'client_email',
        'details',
        'details.emailId = email.id',
      )
      .where('details.clientId = :clientId', { clientId })
      .getMany();
  }

  getClientPhonesDetails(clientId: string): Promise<Phone[]> {
    console.log(
      '************** ClientService getClientPhonesDetails **************',
    );
    return this.repoSVC.phone
      .createQueryBuilder('phone')
      .leftJoinAndMapMany(
        'phone.details',
        'client_phone',
        'details',
        'details.phoneId = phone.id',
      )
      .where('details.clientId = :clientId', { clientId })
      .getMany();
  }

  getClientPropertiesDetails(clientId: string): Promise<Property[]> {
    console.log(
      '************** ClientService getClientPropertiesDetails **************',
    );
    return this.repoSVC.property
      .createQueryBuilder('property')
      .leftJoinAndMapMany(
        'property.details',
        'client_property',
        'details',
        'details.propertyId = property.id',
      )
      .where('details.clientId = :clientId', { clientId })
      .getMany();
  }

  getClientWebsitesDetails(clientId: string): Promise<Website[]> {
    console.log(
      '************** ClientService getClientWebsitesDetails **************',
    );
    return this.repoSVC.websites
      .createQueryBuilder('website')
      .leftJoinAndMapMany(
        'website.details',
        'client_website',
        'details',
        'details.websiteId = website.id',
      )
      .where('details.clientId = :clientId', { clientId })
      .getMany();
  }
}
