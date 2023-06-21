import { Body, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';
import { PrismaService } from './prisma.service';
import { UpdateUserDto } from './update-user.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  create(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: { name: data.name, empId: data.empId, birthDate: data.birthDate },
    });
  }

  async deleteById(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  update(id: number, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }
}
