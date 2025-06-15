'use client'

import { Header } from "@/components/ui/header"

export default function TeacherPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentRole="teacher" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Teacher Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Welcome to your teaching dashboard. This is a placeholder page.</p>
        </div>
      </div>
    </div>
  )
}

