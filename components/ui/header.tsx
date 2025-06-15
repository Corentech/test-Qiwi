'use client'

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, User, Settings, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header({ 
  currentRole, 
  userEmail = "user@example.com",
  userName = "John Doe"
}: { 
  currentRole: "learner" | "teacher", 
  userEmail?: string,
  userName?: string 
}) {
  const router = useRouter()
  const userInitial = userEmail.charAt(0).toUpperCase()

  const handleRoleSwitch = () => {
    router.push(currentRole === "learner" ? "/dashboard/teacher" : "/dashboard/learner")
  }

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href={`/dashboard/${currentRole}/home`} className="text-2xl font-bold text-blue-600">
            Qiwi
          </Link>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRoleSwitch}
              className="text-xs"
            >
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              Switch to {currentRole === "learner" ? "Teaching" : "Learning"}
            </Button>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-10 w-10 rounded-full border-2 border-blue-100 hover:border-blue-200 transition-colors cursor-pointer"
                >
                  <span className="text-lg font-semibold text-blue-600">{userInitial}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" sideOffset={5}>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userName}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userEmail}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}