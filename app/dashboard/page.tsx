'use client'

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export default function SelectRolePage() {
  const router = useRouter()

  const handleRoleSelect = (role: string) => {
    // Rediriger directement vers le dashboard correspondant
    router.push(`/dashboard/${role}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Qiwi</h1>
          <p className="text-xl text-gray-600">Choose how you want to use the platform</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleRoleSelect('learner')}>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-blue-600" />
              </div>
              <CardTitle className="text-center">I want to learn</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Connect with tutors and get help with your studies
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handleRoleSelect('teacher')}>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-center">I want to teach</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600">
              Share your knowledge and help other students succeed
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 