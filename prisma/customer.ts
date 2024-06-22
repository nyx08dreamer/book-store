import {Prisma} from '@prisma/client'

export const customers : Prisma.CustomerCreateInput[] = [
    {
        firstName: "Rafael",
        lastName: "Perez",
        email: "dellicarpini@gmail.com",
        hashedPassword: "123456",
    },
    {
        firstName: "Edgar",
        lastName: "Quiñones",
        email: "edqcov@gmail.com",
        hashedPassword: "123456",
    }
]