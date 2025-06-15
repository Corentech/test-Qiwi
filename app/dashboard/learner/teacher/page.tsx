"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeacherPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Teachers</h1>
        <p className="text-gray-600 text-lg">Connect with your teachers.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Teachers Content</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add your teachers content here */}
        </CardContent>
      </Card>
    </div>
  )
} 