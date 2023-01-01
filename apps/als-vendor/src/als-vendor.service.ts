import { Injectable } from '@nestjs/common';

@Injectable()
export class AlsVendorService {
  getHello(): string {
    return 'Hello World!';
  }
}
