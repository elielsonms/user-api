import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserResponseDTO } from './dto/userResponse.dto';
import { UserRequestDTO } from './dto/userRequest.dto';
import { UserMapper } from './user.mapper';

@Controller()
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userMapper: UserMapper) {}

  @Post("api/users")
  createUser(@Req() userRequestDTO: UserRequestDTO ) : void {
    this.userService.save(this.userMapper.map(userRequestDTO))
  }

  @Get('api/users/:userId')
  async getUserById(@Param('userId') userId: string): Promise<UserResponseDTO> {
    return this.userMapper.map(await this.userService.findById(userId));
  }
}
