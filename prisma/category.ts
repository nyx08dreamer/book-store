import {Prisma} from '@prisma/client'

export const categories : Prisma.CategoryCreateInput[] = [
    {
        name: "Terror",

    },
    {
        name: "Fantasía",
    },
    {
        name: "Comedia",
    }
]