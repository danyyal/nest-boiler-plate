import { Module } from '@nestjs/common';

import { AlsVendorController } from './als-vendor.controller';
import { AlsVendorService } from './als-vendor.service';

@Module({
  imports: [],
  controllers: [AlsVendorController],
  providers: [AlsVendorService],
})
export class AlsVendorModule {}
