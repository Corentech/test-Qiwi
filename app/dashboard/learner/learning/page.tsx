'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Users, GraduationCap, Search } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data for demonstration
const upcomingSessions = [
  {
    id: 1,
    subject: "Calculus",
    tutor: "Dr. Smith",
    time: "Today, 2:00 PM",
    duration: "1 hour"
  },
  {
    id: 2,
    subject: "Physics",
    tutor: "Prof. Johnson",
    time: "Tomorrow, 10:00 AM",
    duration: "1.5 hours"
  }
]

const availableTutors = [
  {
    id: 1,
    name: "Dr. Smith",
    subject: "Mathematics",
    rating: 4.9,
    students: 120
  },
  {
    id: 2,
    name: "Prof. Johnson",
    subject: "Physics",
    rating: 4.8,
    students: 95
  }
]

export default function LearningDashboard() {
  const router = useRouter()

  const handleSwitchMode = () => {
    localStorage.setItem('userRole', 'teacher')
    router.push('/dashboard/teacher')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Dashboard</h1>
          <Button 
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleSwitchMode}
          >
            Switch to Teaching Mode
            <GraduationCap className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search for tutors or subjects..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                      <div>
                        <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                        <p className="text-sm text-gray-600">with {session.tutor}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{session.time}</p>
                        <p className="text-sm text-gray-600">{session.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Course Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">Calculus I</h3>
                      <span className="text-sm font-medium text-blue-600">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900">Physics 101</h3>
                      <span className="text-sm font-medium text-blue-600">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Available Tutors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-600" />
                  Available Tutors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableTutors.map((tutor) => (
                    <div key={tutor.id} className="p-4 bg-white rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{tutor.subject}</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-yellow-600">★ {tutor.rating}</span>
                        <span className="text-gray-600">{tutor.students} students</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    Schedule New Session
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    Browse Courses
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    View Learning History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 