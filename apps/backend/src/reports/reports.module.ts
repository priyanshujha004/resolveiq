<<<<<<< HEAD
<<<<<<< HEAD
import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, PrismaService],
  exports: [ReportsService],
})
export class ReportsModule {}
=======
// TODO P3: implement
import { Module } from '@nestjs/common';
@Module({})
export class ReportsModule {}
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
=======
import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, PrismaService],
  exports: [ReportsService],
})
export class ReportsModule {}
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
