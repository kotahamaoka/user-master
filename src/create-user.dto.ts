import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import * as dateFns from 'date-fns';

export const CreateUserSchema = z.object({
  name: z.string(),
  empId: z.number().int(),
  birthDate: z
    .dateString()
    .format('date')
    .transform((value) => dateFns.parseISO(value)),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
