import { NestFactory } from '@nestjs/core';

import { AlsReportingModule } from './als-reporting.module';

async function bootstrap() {
  const app = await NestFactory.create(AlsReportingModule);
  await app.listen(process.env.PORT || 3002);
}

bootstrap();
