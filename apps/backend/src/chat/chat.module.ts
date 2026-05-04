<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, PrismaService],
})
export class ChatModule {}
=======
// TODO P2: implement
import { Module } from '@nestjs/common';
@Module({})
export class ChatModule {}
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
