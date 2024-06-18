import { Prisma } from "@prisma/client"

export const books: Prisma.BookCreateInput[] = [
  {
    title: 'Alexander Moya y la Raspada Filosofal',
    description: 'Nadie pasa con vida, protégenos señor con tu espíritu',
    publisher: 'Editorial Humboldt',
    publication: 2024,
    price: 19.99,
    quantity: 5,
    selled: 10,
  },
  {
    title: 'Alexander Moya y las Reliquias de la Programación',
    description: 'Solo los valientes compilan',
    publisher: 'Editorial Humboldt',
    publication: 2024,
    price: 19.99,
    quantity: 5,
    selled: 10,
  },
  {
    title: 'Alexander Moya: Una historia de atracos y venganzas',
    description: 'Robar bancos, explosiones y fiestas',
    publisher: 'Editorial Humboldt',
    publication: 2024,
    price: 19.9,
    quantity: 5,
    selled: 10,
  },
]