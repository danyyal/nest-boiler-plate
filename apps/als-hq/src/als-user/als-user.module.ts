import { Module } from '@nestjs/common';
import { CoreModule } from 'als/core';

import { AlsUserController } from './als-user.controller';

@Module({
  imports: [CoreModule],
  controllers: [AlsUserController],
})
export class AlsUserModule {}
