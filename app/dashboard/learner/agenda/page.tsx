"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgendaPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Agenda</h1>
        <p className="text-gray-600 text-lg">View and manage your schedule.</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Agenda Content</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add your agenda content here */}
        </CardContent>
      </Card>
    </div>
  )
} 