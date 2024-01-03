import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
    const id = parseInt(params.id)
    try {
        const result = await prisma.users.delete({
            where:{id:id}
        })
        return NextResponse.json({message:result},{status:200})
    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
}