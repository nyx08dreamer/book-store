import {Prisma} from '@prisma/client'

export const users : Prisma.UserCreateInput[] = [
    {
        firstName: "User",
        lastName: "Admin",
        email: "useradmin1@gmail.com",
        hashedPassword: "123456",
    },
]