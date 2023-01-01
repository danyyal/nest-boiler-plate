import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health-check')
  ping() {
    return `Service is listening at port ${process.env.PORT}`;
  }
}
