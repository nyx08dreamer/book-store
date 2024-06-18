import { PrismaClient } from '@prisma/client'
import { books } from './book';
import { authors } from './author';
import { users } from './user';
import { clients } from './client';
import { categories } from './category';
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

    for (let client of clients){

        await prisma.client.create({
            data: client
        })
    }
    
    for (let category of categories){

        await prisma.category.create({
            data: category
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