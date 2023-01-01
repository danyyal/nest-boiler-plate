import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AlsReportingController } from './als-reporting.controller';
import { AlsReportingService } from './als-reporting.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AlsReportingController],
  providers: [AlsReportingService],
})
export class AlsReportingModule {}
