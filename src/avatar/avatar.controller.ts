import { Controller, Get, Param, Delete,} from '@nestjs/common';
import { AvatarService } from './avatar.service';


@Controller()
export class AvatarController {
  constructor(
    private readonly avatarService: AvatarService) {}

  @Get('api/users/:userId/avatar')
  getUserAvatar(@Param('userId') userId: string): String {
    return ""
  }

  @Delete('api/users/:userId/avatar')
  deleteUserAvatar(@Param('userId') userId: string) : void {
    this.avatarService.delete(userId)
  }
}
