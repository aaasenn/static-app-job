import * as zod from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const zodSchema = zod.object({
  fullname: zod.string().min(1, 'Не должно быть пустым'),
  country: zod.string().min(1),
  description: zod.string().optional()
})

export const schema = toTypedSchema(zodSchema)

export type FormValues = zod.infer<typeof zodSchema>