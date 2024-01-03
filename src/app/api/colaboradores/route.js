import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

// export async function POST(request) {
//     try {
//         const data = await request.json();

//         const users = await prisma.users.create({
//             data: data
//         });

//         return new NextResponse(JSON.stringify(users), {
//             headers: { "Content-Type": "application/json" },
//             status: 201
//         });
//     } catch (error) {
//         return new NextResponse(error.message, { status: 500 },error);
//     }
// }

export async function POST(request) {
    try {
        const data = await request.json();

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.contrasena, salt);

        const users = await prisma.users.create({
            data: {
                ...data,
                contrasena: hashedPassword
            }
        });

        return new NextResponse(JSON.stringify(users), {
            headers: { "Content-Type": "application/json" },
            status: 201
        });

    } catch (error) {
        return new NextResponse(error.message, { status: 500 },error);
    }

}

export async function GET(request) {
    try {
        const users = await prisma.users.findMany()
        return NextResponse.json(users,{status:200})
    } catch (error) {
        return new NextResponse(error.message,{status:500})
    }
}