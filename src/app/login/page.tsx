'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link.js";

// Import the Shadcn/UI components you've installed
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";


// 1. Define the Schema for LOGIN (only 2 fields)
const loginFormSchema = z.object({
  username: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 4 characters.",
  }),
});

// This is the key change: using 'export default' instead of just 'export'
export default function LoginPage() {
  const router = useRouter();

  // 2. Initialize the Form (React Hook Form)
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });


  // 3. Define the submit handler
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log("Login Form Values:", values);
    

    try{
      const response = await fetch('/api/auth/login', { 
        method: "POST", 
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(values)
    });
    if(!response.ok){
      throw new Error('Login failed')
    }

    const data = await response.json();
    console.log("Login successful: ", data);
    router.push('/')
  }
  catch(err){
    console.error('Login fetch failed ', err);
  }
}

  // 4. Build the UI
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col justify-center items-center p-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link href="/register">Register here!</Link>
        <Button type="submit" className="w-[30%] cursor-pointer">Log In</Button>
      </form>
    </Form>
  );
}