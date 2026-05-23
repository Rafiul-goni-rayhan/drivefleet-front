"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
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
import { useRouter } from "next/navigation"; // Removed unused imports
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ name, image, email, password });

    try {
      const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        image, // User image URL (optional)
        callbackURL: "/signin", // A URL to redirect to after the user verifies their email (optional)
      
      });

      if (error) {
        console.error("Sign-up error:", error); // Added error logging for better debugging
        toast.error("Sign-up failed. Please try again."); // Added user feedback for errors
        return;
      }
       toast.success("Sign-up successful! Please check your email to verify your account."); // Notify user of successful sign-up
      // Redirect to home page after successful sign-up and login
      router.push("/signin"); // Home page navigation
    } catch (err) {
      console.error("Unexpected error:", err); // Catch unexpected errors
      toast.error("An unexpected error occurred. Please try again later."); // Added fallback error handling
    }
  };
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField name="image" type="text">
          {" "}
          {/* Made image field optional */}
          <Label>Image URL</Label>
          <Input placeholder="Image URL (optional)" />
          <FieldError />
        </TextField>

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

        <div className="flex gap-2 flex-col">
          <div className="flex gap-9">
            <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>

          </div>
          <div>
            <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className={"w-full"}
          >
            sign in with google
          </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
}
