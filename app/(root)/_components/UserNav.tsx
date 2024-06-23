"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ImageIcon, Loader, Menu } from "lucide-react"
import Image from "next/image"
import {
  LoginLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs"

const UserNav = () => {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="border rounded-full px-3 flex items-center cursor-pointer">
          <Menu className="h-5 w-5" />
          <div className="relative h-11 w-11 flex items-center justify-center">
            {isLoading && <Loader className="h-4 w-4 animate-spin" />}
            {!isAuthenticated && !isLoading && (
              <Image
                src={"/default-user-image.jfif"}
                alt="user"
                fill
                className="object-contain"
              />
            )}
            {isAuthenticated && !isLoading && (
              <Image
                src={user?.picture || "/default-user-image.jfif"}
                alt="user"
                fill
                className="object-contain"
              />
            )}
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        forceMount
        align="end"
        alignOffset={8}
        className="w-52"
      >
        {!isAuthenticated && !isLoading && (
          <>
            <DropdownMenuItem>
              <LoginLink>Log in</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RegisterLink>Sign Up</RegisterLink>
            </DropdownMenuItem>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <div className="font-bold">
            <DropdownMenuItem>Airbnb your Home</DropdownMenuItem>
            <DropdownMenuItem>My Listings</DropdownMenuItem>
            <DropdownMenuItem>My Favorites</DropdownMenuItem>
            <DropdownMenuItem>My Reservations</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserNav
