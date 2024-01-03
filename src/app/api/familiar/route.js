// import { NextResponse } from "next/server";
// import {conn} from '@/libs/mysql';

// export async function GET(){
//     try {
//         const results = await conn.query('SELECT * FROM familiar');
//         return NextResponse.json(results);
//     } catch (error) {
//         return NextResponse.json (
//             {
//                 message: error.message,
//             },
//             {
//                 status: 500,
//             }
//         )
//     }
// }


// export async function POST(request){
//     try {
//         const {nombre, razon_social, rfc, correo, telefono, celular, direccion, alias, despacho} = await request.json();

//         const result = await conn.query("INSERT INTO clientes SET ?",{
//             nombre: nombre, 
//             razon_social: razon_social, 
//             direccion: direccion, 
//             rfc: rfc, 
//             correo: correo, 
//             alias: alias, 
//             telefono: telefono, 
//             celular: celular, 
//             despacho: despacho
//         });

//         return NextResponse.json(
//             {
//                 nombre,
//                 razon_social,
//                 rfc,
//                 correo,
//                 telefono,
//                 celular,
//                 direccion,
//                 alias,
//                 despacho,
//                 id: result.insertId,
//             },
//             {
//                 status: 201 // Status for "Created"
//             }
//         );
//     } catch (error) { // Define 'error' here
//         console.log(error);
//         return NextResponse.json(
//             { 
//                 message: error.message // Now 'error' is accessible and contains the error details
//             },
//             {
//                 status: 500 // Internal Server Error
//             }
//         );
//     }
// }