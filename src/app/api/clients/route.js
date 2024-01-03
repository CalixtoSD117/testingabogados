import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const data = await request.json();

        const clientes = await prisma.clientes.create({
            data: data
        });

        return new NextResponse(JSON.stringify(clientes), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });
    } catch (error) {
        return new NextResponse(error.message, { status: 500 },error);
    }
}

export async function GET(request) {
    try {
        const clientes = await prisma.clientes.findMany()
        return NextResponse.json(clientes,{status:200})
    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
}