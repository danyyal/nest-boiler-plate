import { IsEmail, IsEnum, IsString } from 'class-validator';

export class CreateAlsUserDto {
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsString()
  password: string;
  @IsString()
  phone_number: string;
  @IsEnum(['admin'])
  role: string;
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
}
