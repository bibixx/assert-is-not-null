import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserData, useUserContext } from "@/context/UserContext";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const context = useUserContext();
  if (context == null) {
    return null;
  }

  return <HeadlessLoginPage logIn={context.logIn} />;
}

interface HeadlessLoginPageProps {
  logIn: (userData: UserData) => void;
}
function HeadlessLoginPage({ logIn }: HeadlessLoginPageProps) {
  const [username, setUsername] = useState("Hello WarsawJS!");
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    if (username !== "") {
      logIn({ name: username });
    }
  }

  return (
    <>
      <div className="container relative hidden min-h-[100dvh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col  text-white dark:border-r lg:flex bg-green-900">
          <div className="absolute inset-0 opacity-50">
            <img
              src="/images/hero.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div
            className="absolute top-0 left-0 w-full h-96 backdrop-blur-xl"
            style={{ mask: `linear-gradient(to bottom, black, transparent)` }}
          />
          <div
            className="absolute top-0 left-0 w-full h-80 bg-green-900"
            style={{ mask: `linear-gradient(to bottom, black, transparent)` }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-96 backdrop-blur-xl"
            style={{ mask: `linear-gradient(to top, black, transparent)` }}
          />
          <div
            className="absolute bottom-0 left-0 w-full h-80 bg-green-900"
            style={{ mask: `linear-gradient(to top, black, transparent)` }}
          />
          <div className="relative z-20 p-10 flex items-center text-lg font-medium">
            <Leaf className="mr-2 h-6 w-6" />
            Leaf It to Me
          </div>
          <div className="relative z-20 mt-auto p-10">
            <blockquote className="space-y-2 relative">
              <p className="text-lg">
                &ldquo;Thanks to Leaf It to Me, my plants are thriving, and I
                finally feel like a plant whisperer. It's like having a green
                thumb on autopilot!&rdquo;
              </p>
              <footer className="text-sm">Emily Greenfield</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 h-full flex items-center bg-green-50">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className={cn("grid gap-6")}>
              <form onSubmit={onSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      defaultValue="my-password"
                      id="password"
                      type="password"
                    />
                  </div>
                  <Button>Sign In</Button>
                </div>
              </form>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking sign in, you agree to our{" "}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms&nbsp;of&nbsp;Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy&nbsp;Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
