import { Controller, Get } from '@nestjs/common';

import { AlsVendorService } from './als-vendor.service';

@Controller()
export class AlsVendorController {
  constructor(private readonly alsVendorService: AlsVendorService) {}

  @Get()
  getHello(): string {
    return this.alsVendorService.getHello();
  }
}
