import { z } from 'zod'

export const User = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  userType: z.string(),
  fantasyName: z.string().optional(),
  cpf: z.string().refine((value) =>  /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(value), {
    message: 'O CPF é inválido',
  }),
  cnpj: z.string().optional().refine((value) => {
   return value ? /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/.test(value) : null
  }, {
    message: 'O CNPJ é inválido',
  }),
  phone: z.string().refine((value) => /^([1-9]{2}) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/.test(value), {
    message: 'O número de telefone é inválido',
  }),
}).superRefine((data, ctx) => {
  if (data.userType === 'JURIDICA') {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'O nome fantasia é obrigatório',
      path: ['fantasyName'],
    })
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'O CNPJ é obrigatório',
      path: ['cnpj'],
    })
  }
})
