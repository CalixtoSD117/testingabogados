import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
    const id = parseInt(params.id)
    try {
        const result = await prisma.clientes.delete({
            where:{id:id}
        })
        return NextResponse.json({message:result},{status:200})
    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
}

export async function PUT(request,{params}){
    console.log(params)
    const id = parseInt(params.id)
    const data = await request.json()
    try {
        const result = await prisma.clientes.update({
            where : {id:id},
            data : data
        })
        if(!result){
            return new NextResponse(`Player with ID ${id} not found`,{status:404})
        }
        return NextResponse.json({message:result},{status:200})
    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
}