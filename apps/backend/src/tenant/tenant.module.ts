<<<<<<< HEAD
<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TenantController],
  providers: [TenantService, PrismaService],
  exports: [TenantService],
})
=======
// TODO P1: implement
import { Module } from '@nestjs/common';
@Module({})
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
=======
import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantService } from './tenant.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TenantController],
  providers: [TenantService, PrismaService],
  exports: [TenantService],
})
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
export class TenantModule {}
