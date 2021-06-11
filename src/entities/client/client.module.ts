import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientSSRController } from './client-ssr.controller';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

@Module({
  imports: [ConfigService],
  controllers: [ClientController, ClientSSRController],
  providers: [ClientService],
  exports: [],
})
export class ClientModule {}
