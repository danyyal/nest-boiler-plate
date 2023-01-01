import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AlsUserDocument = HydratedDocument<AlsUser>;

@Schema()
export class AlsUser {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  phone_number: string;

  @Prop({ required: true, default: 'admin' })
  role: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;
}

export const AlsUserSchema = SchemaFactory.createForClass(AlsUser);
