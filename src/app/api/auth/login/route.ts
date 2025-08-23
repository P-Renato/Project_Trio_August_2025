import { NextRequest, NextResponse } from "next/server";
import { StoredUser } from "@/types/products";
import { promises as fs } from 'fs'; // Using the promise-based API
import path from 'path';
import { compare } from 'bcryptjs';


const dataFilePath = path.join(process.cwd(), 'src/data/users.json');

async function getUsers(): Promise<StoredUser[]> {
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

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if(!username || !password){
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        const users = await getUsers();
        const user = users.find(u=> u.username === username);
        if(!user) {
            return NextResponse.json({ error: 'Invalid creadentials---!user'}, { status: 401 });
        }
        const isPasswordValid = await compare(password, user.password);
        if(!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials---!password'}, { status: 401 });
        }
        
       
        return NextResponse.json(
            {
                user: {
                    id: user.id,
                    username: username,
                },
                message: "User logged in successfully"
            }, 
            {status: 201}
        );
    } catch (err) {
        console.error("Login Error: ", err);
        return NextResponse.json({ error: "Internal server error"}, {status: 500});
    }
}