import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUser(): string {
    return this.appService.getUser();
  }
  @Post('post')
  postUser(): string {
    return this.appService.postUser();
  }
}
