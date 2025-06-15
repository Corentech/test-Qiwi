"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookCoursePage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Book a Course</h1>
        <p className="text-gray-600 text-lg">Find and book your next course.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Book Course Content</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add your book course content here */}
        </CardContent>
      </Card>
    </div>
  )
} 