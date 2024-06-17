import {Prisma} from '@prisma/client'

export const orders : Prisma.OrderCreateInput[] = [
    {
        totalPrice: "50.00",
    },
    {
        totalPrice: "83.00",
    }
]