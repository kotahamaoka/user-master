import { createZodDto } from 'nestjs-zod';
import {
  CreateUserDto,
  CreateUserSchema as CreateUserScheme,
} from './create-user.dto';

const UpdateUserScheme = CreateUserScheme.partial();

export class UpdateUserDto extends createZodDto(UpdateUserScheme) {}
