import { Controller, Get } from '@nestjs/common';

import { AlsReportingService } from './als-reporting.service';

@Controller()
export class AlsReportingController {
  constructor(private readonly alsReportingService: AlsReportingService) {}

  @Get()
  getHello(): string {
    return this.alsReportingService.getHello();
  }
}
