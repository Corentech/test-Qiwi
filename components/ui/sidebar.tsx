"use client"

import { useRouter, usePathname } from "next/navigation"
import { Home, BookOpen, Calendar, Handshake, GraduationCap } from "lucide-react"

interface SidebarProps {
  role: "learner" | "teacher"
}

export function Sidebar({ role }: SidebarProps) {
  const router = useRouter()
  const pathname = usePathname()

  const navigationItems = [
    { id: "home", label: "Home", icon: Home, path: `/dashboard/${role}/home` },
    { id: "classes", label: "Classes", icon: BookOpen, path: `/dashboard/${role}/classes` },
    { id: "book", label: "Book Course", icon: Handshake, path: `/dashboard/${role}/book-course` },
    { id: "teacher", label: "Teacher", icon: GraduationCap, path: `/dashboard/${role}/teacher` },
    { id: "agenda", label: "Agenda", icon: Calendar, path: `/dashboard/${role}/agenda` },
  ]

  return (
    <div className="w-20 flex-shrink-0">
      <div className="bg-white rounded-lg border p-3 sticky top-6">
        <nav className="space-y-4">
          {navigationItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.path
            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className={`w-full flex flex-col items-center p-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <IconComponent className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
} 