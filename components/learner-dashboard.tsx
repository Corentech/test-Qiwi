"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Home,
  BookOpen,
  Calendar,
  Clock,
  User,
  MessageCircle,
  Video,
  TrendingUp,
  Calculator,
  Code,
  DollarSign,
  GraduationCap,
  Plus,
  Award,
  Target,
  Trophy,
  FileText,
  UserPlus,
} from "lucide-react"

// Mock data
const nextSession = {
  subject: "Corporate Finance",
  professor: "Prof. Michel Laurent",
  time: "Today, 10:00 - 11:30 AM",
  startsIn: "45 minutes",
}

const classHubs = [
  {
    id: 1,
    name: "Corporate Finance",
    icon: DollarSign,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    name: "Statistics 1",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Calculus 2",
    icon: Calculator,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    name: "Intro to Python",
    icon: Code,
    color: "bg-orange-100 text-orange-600",
  },
]

const upcomingSchedule = [
  {
    day: "Today - May 17",
    classes: [
      { name: "Corporate Finance", time: "10:00 - 11:30 AM" },
      { name: "Statistics 1", time: "2:00 - 3:30 PM" },
    ],
  },
  {
    day: "Tomorrow - May 18",
    classes: [
      { name: "Calculus 2", time: "9:00 - 10:30 AM" },
      { name: "Intro to Python", time: "3:00 - 4:30 PM" },
    ],
  },
]

const achievements = [
  { name: "First Session", icon: Trophy, color: "bg-yellow-100 text-yellow-600", earned: true },
  { name: "Week Streak", icon: Target, color: "bg-green-100 text-green-600", earned: true },
  { name: "Top Student", icon: Award, color: "bg-purple-100 text-purple-600", earned: false },
]

export default function LearnerDashboard() {
  const [activeTab, setActiveTab] = useState("home")

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "classes", label: "Classes", icon: BookOpen },
    { id: "book", label: "Book Course", icon: Plus },
    { id: "teacher", label: "Teacher", icon: GraduationCap },
    { id: "agenda", label: "Agenda", icon: Calendar },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-6">
        {/* Fixed Left Sidebar */}
        <div className="w-20 flex-shrink-0">
          <div className="bg-white rounded-lg border p-3 sticky top-6">
            <nav className="space-y-4">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex flex-col items-center p-2 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <IconComponent className="h-6 w-6 mb-1" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {activeTab === "home" && (
            <div>
              {/* Welcome Message */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex 👋</h1>
                <p className="text-gray-600 text-lg">Here's what's next for you today.</p>
              </div>

              {/* 2x2 Grid Layout */}
              <div className="grid grid-cols-2 gap-6">
                {/* Top Left - Your Next Session */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Clock className="mr-2 h-6 w-6 text-blue-600" />
                      Your Next Session
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{nextSession.subject}</h3>
                        <div className="flex items-center space-x-1 text-gray-600 mt-1">
                          <User className="h-4 w-4" />
                          <span>{nextSession.professor}</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="space-y-3">
                          <p className="text-lg font-medium text-blue-900">{nextSession.time}</p>
                          <p className="text-blue-700">Starts in {nextSession.startsIn}</p>
                          <div className="flex space-x-3">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              <Video className="mr-2 h-4 w-4" />
                              Join Session
                            </Button>
                            <Button size="sm" variant="outline">
                              <MessageCircle className="mr-2 h-4 w-4" />
                              Message Tutor
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Right - Upcoming Schedule */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Calendar className="mr-2 h-6 w-6 text-blue-600" />
                      Upcoming Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Book a Course Widget */}
                    <Button
                      onClick={() => setActiveTab("book")}
                      className="w-full bg-green-100 hover:bg-green-200 text-green-700 border border-green-200"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Book a Course
                    </Button>

                    {upcomingSchedule.map((day, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{day.day}</h4>
                        <div className="space-y-2">
                          {day.classes.map((classItem, classIndex) => (
                            <div key={classIndex} className="p-2 bg-gray-50 rounded-lg">
                              <p className="font-medium text-xs text-gray-900">{classItem.name}</p>
                              <p className="text-xs text-gray-600">{classItem.time}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Bottom Left - Your Class Hubs */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <BookOpen className="mr-2 h-6 w-6 text-green-600" />
                      Your Class Hubs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {classHubs.map((classHub) => {
                        const IconComponent = classHub.icon
                        return (
                          <div
                            key={classHub.id}
                            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                          >
                            <div className="flex items-center space-x-3 mb-3">
                              <div className={`p-2 rounded-lg ${classHub.color}`}>
                                <IconComponent className="h-5 w-5" />
                              </div>
                              <h4 className="font-semibold text-gray-900">{classHub.name}</h4>
                            </div>
                            <div className="space-y-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full h-8 text-xs bg-blue-25 border-blue-100 text-blue-600 hover:bg-blue-50"
                              >
                                <FileText className="mr-1 h-3 w-3" />
                                Resources
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full h-8 text-xs bg-orange-25 border-orange-100 text-orange-600 hover:bg-orange-50"
                              >
                                <UserPlus className="mr-1 h-3 w-3" />
                                Find a teacher
                              </Button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Bottom Right - Your Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <TrendingUp className="mr-2 h-6 w-6 text-purple-600" />
                      Your Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Achievement Badges</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {achievements.map((achievement, index) => {
                          const IconComponent = achievement.icon
                          return (
                            <div
                              key={index}
                              className={`border rounded-lg p-3 flex items-center space-x-3 ${
                                achievement.earned ? "bg-gray-50" : "bg-gray-100 opacity-60"
                              }`}
                            >
                              <div className={`p-2 rounded-lg ${achievement.color}`}>
                                <IconComponent className="h-5 w-5" />
                              </div>
                              <div>
                                <h5 className="font-semibold text-sm text-gray-900">{achievement.name}</h5>
                                <p className="text-xs text-gray-600">
                                  {achievement.earned ? "Earned" : "Not earned yet"}
                                </p>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                      <Button variant="ghost" size="sm" className="w-full">
                        View All Achievements
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "classes" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">My Classes</h1>
              <p className="text-gray-600">Detailed view of your classes will be implemented here.</p>
            </div>
          )}

          {activeTab === "book" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Book a Course</h1>
              <p className="text-gray-600">Browse and book available courses and tutoring sessions.</p>
            </div>
          )}

          {activeTab === "teacher" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Find a Teacher</h1>
              <p className="text-gray-600">Browse and connect with available teachers.</p>
            </div>
          )}

          {activeTab === "agenda" && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">My Agenda</h1>
              <p className="text-gray-600">Your schedule and upcoming sessions will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}