// import { hash } from 'bcrypt';
// import { connectToDatabase } from '../../../../utils/db';

// export async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, phone, email, password, rol, cargo } = req.body;

//         if (!name || !email || !password) {
//             return res.status(422).json({ error: 'Missing required fields' });
//         }

//         const hashedPassword = await hash(password, 12);

//         const { db } = await connectToDatabase();

//         const existingUser = await db.collection('users').findOne({ email });

//         if (existingUser) {
//             return res.status(422).json({ error: 'User already exists' });
//         }

//         const result = await db.collection('users').insertOne({
//             name,
//             email,
//             password: hashedPassword,
//         });

//         res.status(201).json({ message: 'User created successfully' });
//     } else {
//         res.status(405).json({ error: 'Method not allowed' });
//     }
// }
