import { User } from '../../../entities/user.entity';
import { Controller, Get } from '@nestjs/common';
import { ProfileServices } from '../services/profile.services';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileServices: ProfileServices) {}

  @Get()
  findAllUser(): Promise<User[]> {
    return this.profileServices.getAllUsers();
  }
}
