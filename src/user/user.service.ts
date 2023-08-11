import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './model/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly httpService: HttpService) {}

  async save(user: User): Promise<void> {
    const toCreateUser = new this.userModel(user)
    await toCreateUser.save()
    console.log("User saved Sucessfully")
  }

  async findById(userId: String): Promise<User> {
    let user  = await firstValueFrom(this.httpService.get<User>("https://reqres.in/api/users/${userId}"))
    return user.data
  }
}
