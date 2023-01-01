import { Injectable } from '@nestjs/common';

@Injectable()
export class AlsReportingService {
  getHello(): string {
    return 'Hello World! from als-reporting';
  }
}
