import { Controller, Get, Param } from '@nestjs/common';
import { Email } from '../local/email.entity';
import { Phone } from '../local/phone.entity';
import { Property } from '../local/property.entity';
import { Website } from '../local/website.entity';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientSvc: ClientService) {}

  @Get('all')
  getAllClients() {
    return this.clientSvc.getAllClients();
  }

  @Get(':id')
  getClientById(@Param() { id }: { id: string }) {
    return this.clientSvc.getClientById(id);
  }

  @Get(':id/emails')
  getClientEmails(@Param() { id }: { id: string }): Promise<Email[]> {
    return this.clientSvc.getClientEmails(id);
  }

  @Get(':id/phones')
  getClientPhones(@Param() { id }: { id: string }): Promise<Phone[]> {
    return this.clientSvc.getClientPhones(id);
  }

  @Get(':id/properties')
  getClientProperties(@Param() { id }: { id: string }): Promise<Property[]> {
    return this.clientSvc.getClientProperties(id);
  }

  @Get(':id/websites')
  getClientWebsites(@Param() { id }: { id: string }): Promise<Website[]> {
    return this.clientSvc.getClientWebsites(id);
  }
}
