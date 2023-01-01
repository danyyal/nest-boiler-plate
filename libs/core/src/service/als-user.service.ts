import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAlsUserDto } from 'als/shared/dto/als-user.dto';
import { Model } from 'mongoose';

import { AlsUser, AlsUserDocument } from '../schema/als-user.schema';

@Injectable()
export class AlsUserService {
  constructor(
    @InjectModel(AlsUser.name)
    private readonly AlsUserModel: Model<AlsUserDocument>,
  ) {}
  getAll(): string {
    return 'Getting all als-users from core lib services';
  }
  async create(alsUserPayload: CreateAlsUserDto) {
    try {
      return await this.AlsUserModel.create(alsUserPayload);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
