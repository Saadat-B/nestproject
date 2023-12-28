import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Hello User!';
  }
  postUser(): string {
    return 'User from post';
  }
}
