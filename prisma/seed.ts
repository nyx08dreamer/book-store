import { PrismaClient } from '@prisma/client'
import { books } from './book';
import { authors } from './author';
import { users } from './user';
import { customers } from './customer';
import { categories } from './category';
import { orders } from './order';
const prisma = new PrismaClient()

async function main() {
    
    for (let book of books){
        
        await prisma.book.create({
            data: book
        })
    }

    for (let author of authors){

        await prisma.author.create({
            data: author
        })
    }

    for (let user of users){

        await prisma.user.create({
            data: user
        })
    }

    for (let customer of customers){

        await prisma.customer.create({
            data: customer
        })
    }
    
    for (let category of categories){

        await prisma.category.create({
            data: category
        })
    }

    for (let order of orders){

        await prisma.order.create({
            data: order
        })
    }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})