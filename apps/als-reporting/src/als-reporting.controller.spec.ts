import { Test, TestingModule } from '@nestjs/testing';

import { AlsReportingController } from './als-reporting.controller';
import { AlsReportingService } from './als-reporting.service';

describe('AlsReportingController', () => {
  let alsReportingController: AlsReportingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AlsReportingController],
      providers: [AlsReportingService],
    }).compile();

    alsReportingController = app.get<AlsReportingController>(
      AlsReportingController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(alsReportingController.getHello()).toBe('Hello World!');
    });
  });
});
