import { NestFactory } from '@nestjs/core';

import { AlsVendorModule } from './als-vendor.module';

async function bootstrap() {
  const app = await NestFactory.create(AlsVendorModule);
  await app.listen(3000);
}

bootstrap();
