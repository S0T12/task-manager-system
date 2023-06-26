import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Controller('registration')
export class RegistrationController {
  @Post()
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
