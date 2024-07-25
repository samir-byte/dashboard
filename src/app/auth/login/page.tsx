import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouter } from "@/routes/hooks/use-router";
import useAuthStore from "@/store/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Login, loginSchema } from "@/app/auth/schemas";
import { useToast } from "@/components/ui/use-toast";
import Loader from "@/components/common/loader";

export default function LoginPage() {
  const { login, user } = useAuthStore();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  // handling form
  const defaultValues = {
    email: "",
    password: "",
  };
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });

  useEffect(() => {
    if (user) {
      console.log("User is already logged in", user);
      router.replace("/");
    }
  }, [user]);

  const onSubmit = (data: Login) => {
    console.log("data", data);
    setLoading(true);
    login({ id: 1, name: "John Doe", email: "john@gmail.com" }, "token");
    router.replace("/");
    toast({
      title: "Success",
      description: "You have successfully loggedin.",
    });
    setLoading(false);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="m@example.com"
                      />
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
                      <Input
                        {...field}
                        type="password"
                        placeholder="********"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Sign in
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
