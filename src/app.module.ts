import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AvatarModule } from './avatar/avatar.module';
import { MongooseModule } from '@nestjs/mongoose';

const mongoString = process.env['MONGO_URI']

@Module({
  imports: [UserModule, AvatarModule, MongooseModule.forRoot(mongoString)]
})
export class AppModule {}
