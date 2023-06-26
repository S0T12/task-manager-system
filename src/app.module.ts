import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationService } from './registration/registration.service';

@Module({
  imports: [],
  controllers: [AppController, RegistrationController],
  providers: [AppService, RegistrationService],
})
export class AppModule {}
