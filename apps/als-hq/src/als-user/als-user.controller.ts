import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlsUserService } from 'als/core/service/als-user.service';
import { CreateAlsUserDto } from 'als/shared/dto/als-user.dto';

@Controller('als-user')
export class AlsUserController {
  constructor(private alsUserService: AlsUserService) {}
  @Get()
  findAll(): string {
    return this.alsUserService.getAll();
  }

  @Post('create')
  create(@Body() alsUserPayload: CreateAlsUserDto) {
    return this.alsUserService.create(alsUserPayload);
  }
}
