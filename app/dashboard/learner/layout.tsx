"use client"

import { Sidebar } from "@/components/ui/sidebar"

export default function LearnerDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-6">
      <Sidebar role="learner" />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
} 