import * as Sentry from "@sentry/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserContext } from "@/context/UserContext";
import { Leaf } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const context = useUserContext();
  const userData = useMemo(() => context?.userData, [context?.userData]);
  const logOut = context?.logOut;

  const userAvatar = useMemo(() => {
    if (userData == null) {
      return "";
    }

    const baseUrl = new URL("https://api.dicebear.com/9.x/micah/svg");

    const colors = ["f7adc3", "fcc5d9", "fadde3", "f7f5ed", "72ddf7"];
    baseUrl.searchParams.set("seed", userData.name);
    baseUrl.searchParams.set("flip", "true");
    baseUrl.searchParams.set("backgroundColor", colors.join(","));

    return baseUrl.toString();
  }, [userData]);

  if (userData == null) {
    Sentry.captureMessage("User data is missing in the header", {
      level: "warning",
    });
    return null;
  }

  return (
    <div className="border-b border-green-500/50 sticky top-0 bg-green-100 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-green-200/50 px-8">
      <div className="flex h-16 items-center justify-between max-w-6xl mx-auto">
        <Button variant="ghost" className="-mx-4" asChild>
          <Link to="/">
            <Leaf className="mr-2 h-6 w-6" />
            <span className="text-lg font-medium">Leaf It to Me</span>
          </Link>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-10 w-10 rounded-full"
              data-testid="avatar"
            >
              <Avatar className="h-10 w-10 relative">
                <AvatarImage src={userAvatar} alt="" />
                <AvatarFallback>{userData.name}</AvatarFallback>
                <div className="inner-border inner-border-green-500/50 absolute w-full h-full rounded-full z-10"></div>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56"
            align="end"
            side="bottom"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p
                  className="text-sm font-medium leading-none"
                  data-testid="user-name"
                >
                  {userData.name}
                </p>
                <p
                  className="text-xs leading-none text-muted-foreground"
                  data-testid="email"
                >
                  {getEmail(userData.name)}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>New Team</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logOut}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function getEmail(name: string) {
  return (
    name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .split(" ")
      .join(".")
      .toLowerCase() + "@example.com"
  );
}
