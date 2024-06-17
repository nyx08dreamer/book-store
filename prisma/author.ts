import {Prisma} from '@prisma/client'

export const authors : Prisma.AuthorCreateInput[] = [
    {
        firstName: "Alice",
        lastName: "Oseman",
    },
    {
        firstName: "J.K",
        lastName: "Rowling",
    },
    {
        firstName: "Alexander",
        lastName: "Moya",
    }
]