import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../../entities/user.entity';
import { ProfileController } from '../controllers/profile.controller';
import { ProfileServices } from '../services/profile.services';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ProfileServices],
  controllers: [ProfileController],
})
export class ProfileModule {}
