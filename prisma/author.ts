import {Prisma} from '@prisma/client'

export const authors : Prisma.AuthorCreateInput[] = [
    {
        firstName: "Stephen",
        lastName: "King",
    },
    {
        firstName: "Tsuki",
        lastName: "Arunji",
    },
    {
        firstName: "Ariana",
        lastName: "Godoy",
    },
]