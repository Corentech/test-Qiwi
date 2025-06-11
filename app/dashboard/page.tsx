'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"
import { useRouter } from 'next/navigation'

type UserRole = 'learner' | 'teacher' | null

export default function Dashboard() {
  const [userRole, setUserRole] = useState<UserRole>(null)
  const [isFirstVisit, setIsFirstVisit] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user has a saved role
    const savedRole = localStorage.getItem('userRole')
    if (savedRole) {
      // Redirect to the appropriate dashboard
      router.push(`/dashboard/${savedRole}`)
    } else {
      // If no role is saved, show the role selection
      router.push('/dashboard/select-role')
    }
  }, [router])

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role)
    setIsFirstVisit(false)
    localStorage.setItem('userRole', role as string)
  }

  const handleRoleSwitch = () => {
    const newRole = userRole === 'learner' ? 'teacher' : 'learner'
    setUserRole(newRole)
    localStorage.setItem('userRole', newRole)
  }

  if (isFirstVisit) {
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

  return null // This page will redirect, so no need to render anything
} 