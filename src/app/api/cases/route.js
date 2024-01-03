// // import { PrismaClient } from '@prisma/client';
// // import { NextResponse } from "next/server";

// // export async function POST(req) {
// //         try {
// //             const data = await req.json();
// //             // Assuming your form data matches the structure of your Prisma model
// //             const savedData = await prisma.casos.create({ 
// //                 data: data
// //              });
            
// //              return new NextResponse(JSON.stringify(savedData), {
// //                 headers: { "Content-Type": "application/json" },
// //                 status: 201
// //             });
        
// //         } catch (error) {
// //             return new NextResponse(error.message, { status: 500 },error);
// //         }
// // }

// import { PrismaClient } from '@prisma/client';
// import multer from 'multer';
// import nextConnect from 'next-connect';

// const prisma = new PrismaClient();
// const upload = multer({ dest: 'uploads/' }); // Configure multer

// // Define the handler using next-connect and chain the methods
// const handler = nextConnect()
//   .use(upload.array('pdf')) // 'pdf' is the name of your file input field
//   .post(async (req, res) => {
//     try {
//       // req.files contains the uploaded files
//       // req.body contains the other form data
//       // Your database operation goes here
//       const savedData = await prisma.casos.create({
//         data: {
//           // Your data mapping here
//         },
//       });

//       res.status(201).json(savedData);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });

// // Export the handler
// export default handler;

// // Export the config separately
// // export const config = {
// //   api: {
// //     bodyParser: false, // Disallow body parsing, multer will handle it
// //   },
// // };
