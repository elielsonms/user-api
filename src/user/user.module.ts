import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HttpModule } from '@nestjs/axios';
import { UserMapper } from './user.mapper';
import { User, UserSchema } from './model/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [HttpModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, UserMapper],
})
export class UserModule {}
