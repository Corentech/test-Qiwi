"use client"

import { usePathname } from "next/navigation"
import { Header } from "@/components/ui/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const currentRole = pathname.includes("/teacher") ? "teacher" : "learner"

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentRole={currentRole} />
      <div className="container mx-auto px-4 py-6">
        {children}
      </div>
    </div>
  )
} 