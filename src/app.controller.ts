import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  async getAllUsers(): Promise<User[]> {
    return await this.appService.getAll();
  }

  @Post('/user')
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return await this.appService.create(data);
  }

  @Delete('/user/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.appService.deleteById(id);
  }

  @Patch('/user/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ): Promise<User> {
    return await this.appService.update(id, data);
  }
}
