"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import toast from "react-hot-toast";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation"; // Added useRouter for navigation

export default function SignInPage() {
  const router = useRouter(); // Initialize router for navigation

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });

    try {
      const { data, error } = await authClient.signIn.email({
        email, // user email address
        password, // user password
      });


      
      if (error) {
        // শুধু error না লিখে error.message বা পুরো অবজেক্টটি ডিটেইলস সহ দেখুন
        console.error("Full Error Context:", error);
         toast.error(error.message || "Login failed. Please check your credentials.");
        return;
      }

      toast.success("Login successful!"); // Notify user of successful login
      router.push("/"); // Redirect to home page
    } catch (err) {
      console.error("Unexpected error:", err); // Catch unexpected errors
      toast.error("An unexpected error occurred. Please try again later."); // Show fallback error message
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign In</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <p className="text-center">google login</p>
      <Button
        onClick={handleGoogleSignIn}
        variant="outline"
        className={"w-full"}
      >
        sign in with google
      </Button>
    </Card>
  );
}
