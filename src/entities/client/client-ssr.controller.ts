import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/new-client.dto';

@Controller('ssr')
export class ClientSSRController {
  constructor(private readonly clientSvc: ClientService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render('index', { message: 'Hello world!!' });
  }

  @Get('all')
  async getAllClients(@Res() res: Response) {
    const clients = await this.clientSvc.getAllClients();
    return res.render('clients/all', { clients });
  }

  @Get('new')
  getFormNewClient(@Res() res: Response) {
    return res.render('clients/newclientemail');
  }
 
  @Post('new')
  async postNewClient(
    @Res() res: Response,
    @Body() createClient: CreateClientDto,
  ) {
    
    const newClient = await this.clientSvc.newClient(createClient);
    return res.render('print', { message: newClient.id });
  }

  @Get('array')
  getArray(@Res() res: Response) {
    const contentArray = [
      { message: 'first' },
      { message: 'second' },
      { message: 'third' },
    ];
    return res.render('array', { myArray: contentArray });
  }
}
