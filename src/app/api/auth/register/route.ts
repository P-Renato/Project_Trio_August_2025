import { NextRequest, NextResponse } from "next/server";
import { RegisterUser } from "@/types/products";
import { promises as fs } from 'fs';
import path from 'path';
import  bcrypt from 'bcryptjs';


const dataFilePath = path.join(process.cwd(), 'src/data/users.json');

async function getUsers(): Promise<RegisterUser[]> {
  try {
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    if (fileContents.trim() === '') {
      return [];
    }
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

export async function POST (request: NextRequest) {
    try{
        const body = await request.json();
        const {username, email, password, confirmPassword} = body;

        if(!username || !email || !password || !confirmPassword) {
            return NextResponse.json({error: "Missing required credentials"}, {status: 400});
        }
        const users = await getUsers();

        const userExists = users.some(u=>u.username === username);
        if(userExists){
            return NextResponse.json({error: "User already taken"}, {status: 409});
        }

         const hashedPassword = await bcrypt.hash(password, 10);

        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

        const newUser: RegisterUser= {
            id: newId,
            username: username,
            email: email,
            password: hashedPassword,
            confirmPassword: hashedPassword,
        }

        users.push(newUser);

        await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2));

        return NextResponse.json(
            {
                user: {
                    id: newUser.id,
                    username: username,
                    email: email,
                },
                message: "User registered successfully"
            },
            {status: 201}
        );
    } catch(err){
        console.error("Registration error: ", err);
        return NextResponse.json({ error: "Internal server error"}, {status: 500});
    }
}






