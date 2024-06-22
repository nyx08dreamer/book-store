import { Prisma } from "@prisma/client"

export const books: Prisma.BookCreateInput[] = [
  {
    title: 'Heartstopper',
    description: 'Un chico conoce a otro',
    publisher: 'V&R Editoras',
    publication: 2020,
    price: 19.99,
    quantity: 5,
    selled: 10,
  },
  {
    title: '¡Bendito WhatsApp!',
    description: 'WhatsApp para enamorados y adolescentes con impulsos',
    publisher: 'Wattpad',
    publication: 2017,
    price: 19.99,
    quantity: 5,
    selled: 10,
  },
  {
    title: 'A través de mi ventana',
    description: 'El amor pero desde una ventana',
    publisher: 'ALFAGUARA',
    publication: 2022,
    price: 19.99,
    quantity: 5,
    selled: 10,
  },
]