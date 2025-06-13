'use client'

import { Header } from "@/components/ui/header"
import LearnerDashboard from "@/components/learner-dashboard"

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Learner Dashboard" />
      <LearnerDashboard />
    </div>
  )
}