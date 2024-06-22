import {Prisma} from '@prisma/client'

export const users : Prisma.UserCreateInput[] = [
    {
        firstName: "Manager",
        lastName: "Booker",
        email: "useradmin2@gmail.com",
        hashedPassword: "123456",
    },
]