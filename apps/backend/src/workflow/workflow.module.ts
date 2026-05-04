<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { WorkflowController } from './workflow.controller';
import { WorkflowService } from './workflow.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [WorkflowController],
  providers: [WorkflowService, PrismaService],
})
export class WorkflowModule {}
=======
// TODO P3: implement
import { Module } from '@nestjs/common';
@Module({})
export class WorkflowModule {}
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
