import { NestFactory } from '@nestjs/core';

import { BackgroundWorkerModule } from './background-worker.module';

async function bootstrap() {
  const app = await NestFactory.create(BackgroundWorkerModule);
  await app.listen(3000);
}

bootstrap();
