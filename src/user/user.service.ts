import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  save(): string {
    return 'Hello World!';
  }
}
