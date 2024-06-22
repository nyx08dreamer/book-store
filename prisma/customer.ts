import {Prisma} from '@prisma/client'

export const customers : Prisma.CustomerCreateInput[] = [
    {
        firstName: "Stefano",
        lastName: "Parra",
        email: "stefanoparra15@gmail.com",
        hashedPassword: "123456",
    },

    {
        firstName: "Nicole",
        lastName: "Rodríguez",
        email: "nikirv0808@gmail.com",
        hashedPassword: "123456",
    }
]