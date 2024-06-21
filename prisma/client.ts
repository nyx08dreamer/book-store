import {Prisma} from '@prisma/client'

export const clients : Prisma.ClientCreateInput[] = [
    {
        firstName: "Stefano",
        lastName: "Parra",
        email: "stefanoparra15@gmail.com",
        password: "123456",
    },

    {
        firstName: "Nicole",
        lastName: "Rodríguez",
        email: "nikirv0808@gmail.com",
        password: "123456",
    }
]