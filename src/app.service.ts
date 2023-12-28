import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postHello(): string {
    return 'Hello from post';
  }
  patchHello(): string {
    return 'Hello from post';
  }
  deleteHello(): string {
    return 'Hello from post';
  }
}
