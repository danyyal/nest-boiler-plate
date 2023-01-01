import { Test, TestingModule } from '@nestjs/testing';

import { AlsVendorController } from './als-vendor.controller';
import { AlsVendorService } from './als-vendor.service';

describe('AlsVendorController', () => {
  let alsVendorController: AlsVendorController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AlsVendorController],
      providers: [AlsVendorService],
    }).compile();

    alsVendorController = app.get<AlsVendorController>(AlsVendorController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(alsVendorController.getHello()).toBe('Hello World!');
    });
  });
});
