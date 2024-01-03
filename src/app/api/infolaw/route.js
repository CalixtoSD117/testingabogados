// import { NextResponse } from 'next/server';
// import {conn} from '@/libs/mysql';

// export async function GET(){
//     const result = await conn.query('SELECT * FROM info_firma');

//     return NextResponse.json({ message: result });
// }

// export async function POST(request){
//     try {
//         const {rfc, nombre_despacho, razon_social, pais, direccion, telefono, descripcion} = await request.json();

//         const result = await conn.query("INSERT INTO info_firma SET ?",{
//             rfc: rfc, 
//             nombre_despacho: nombre_despacho, 
//             razon_social: razon_social, 
//             pais: pais, 
//             direccion: direccion, 
//             telefono: telefono, 
//             descripcion: descripcion
//         });

//         console.log(result);

//         return NextResponse.json(
//             {
//                 id: result.insertId,
//                 rfc,
//                 nombre_despacho,
//                 razon_social,
//                 pais,
//                 direccion,
//                 telefono,
//                 descripcion
//             },
//             {
//                 status: 201
//             }
//         );
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             { 
//                 message: error.message
//             },
//             {
//                 status: 500
//             }
//         );
//     }
// }