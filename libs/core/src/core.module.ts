import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CoreService } from './core.service';
import { AlsUser, AlsUserSchema } from './schema/als-user.schema';
import { AlsUserService } from './service/als-user.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ahmad:HJ8lN2HhCth4NpSE@cluster0.yamttll.mongodb.net/als?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: AlsUser.name, schema: AlsUserSchema }]),
  ],
  providers: [CoreService, AlsUserService],
  exports: [CoreService, AlsUserService],
})
export class CoreModule {}
