import { Injectable } from '@nestjs/common';
import { RepoService } from '../../repos/repo.service';
import { ClientEmail } from '../local-manytomany/client-email.entity';
import { Email } from '../local/email.entity';
import { Phone } from '../local/phone.entity';
import { Property } from '../local/property.entity';
import { Website } from '../local/website.entity';
import { Client } from './client.entity';
import {
  CreateClientDto,
  CreateUserEmailDto,
  CreateUserPhoneDto,
} from './dto/new-client.dto';

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

  async newClient(createClient: CreateClientDto) {
    console.log('************** ClientService newClient **************');
    console.log('createClient: ', createClient);
    const newClient: Partial<Client> = Object.assign(
      new Client(),
      createClient,
    );

    try {
      const savedClient = await this.repoSVC.client.save(newClient);
      console.log('savedClient: ', savedClient);

      await this.checkAndSaveClientLocals(createClient, savedClient);
      return savedClient;
    } catch (error) {
      throw error;
    }
  }

  async checkAndSaveClientLocals(
    createClient: CreateClientDto,
    savedClient: Client,
  ) {
    // INFO: Check Emails
    if (!Array.isArray(createClient.emails) || !createClient.emails.length) {
      return false;
    }
    await this.saveEmailFromClient(savedClient, createClient.emails);

    // INFO: Check Phones
    if (!Array.isArray(createClient.phones) || !createClient.phones.length) {
      return false;
    }
    await this.savePhonesFromClient(savedClient, createClient.phones);
  }

  // TODO: Refactor all these similar methods to a more general one
  async saveEmailFromClient(client: Client, emails: CreateUserEmailDto[]) {
    console.log(
      '************** ClientService saveEmailFromClient **************',
    );

    for (const email of emails) {
      // TODO: Check if email already exist
      const savedEmail = await this.repoSVC.emails.saveWithCheck(email);
      await this.repoSVC.clientEmail.saveFromClient(client, savedEmail);
    }
    return client;
  }

  async savePhonesFromClient(client: Client, phones: CreateUserPhoneDto[]) {
    console.log(
      '************** ClientService savePhonesFromClient **************',
    );

    for (const phone of phones) {
      // TODO: Check if phone already exist
      const savedPhone = await this.repoSVC.phone.saveWithCheck(phone);

      await this.repoSVC.clientPhone.saveFromClient(client, savedPhone);
    }
    return client;
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

  getClientEmailsEntity(clientId: string): Promise<ClientEmail[]> {
    return this.repoSVC.clientEmail
      .createQueryBuilder('client_email')
      .where('client_email.clientId = :clientId', {
        clientId,
      })
      .leftJoinAndSelect('client_email.email', 'email')
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
