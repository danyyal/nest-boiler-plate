import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from 'als/core';

import { AlsUserModule } from './als-user/als-user.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'apps/als-hq/.env',
    }),
    CoreModule,
    AlsUserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
