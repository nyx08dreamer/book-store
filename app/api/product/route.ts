import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request:Request) {
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role != 'USER'){
        return NextResponse.error()
    }

    const body = await request.json();
    const { title, description, publisher, publication, price, quantity, selled, images, author, categories } = body;

    const book = await prisma.book.create({
        data: {
            title,
            author,
            categories,
            description, 
            publisher,
            publication,  
            quantity, 
            selled, 
            images,
            price: parseFloat(price)
        },
    });

    return NextResponse.json(book)
}