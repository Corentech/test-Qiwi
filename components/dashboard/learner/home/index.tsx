"use client"

import { NextSession } from "./next-session"
import { UpcomingSchedule } from "./upcoming-schedule"
import { ClassHubCarousel } from "./class-hub-carousel"
import { Progress } from "./progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle,
  DollarSign,
  TrendingUp,
  Calculator,
  Code,
  FileText,
  Target,
  Trophy,
  Award
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
  {
    id: 5,
    name: "Business Law",
    icon: FileText,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 6,
    name: "Marketing",
    icon: Target,
    color: "bg-yellow-100 text-yellow-600",
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
  {
    day: "May 19",
    classes: [
      { name: "Business Law", time: "11:00 - 12:30 PM" },
      { name: "Marketing", time: "2:00 - 3:30 PM" },
    ],
  },
  {
    day: "May 20",
    classes: [
      { name: "Corporate Finance", time: "9:00 - 10:30 AM" },
      { name: "Statistics 1", time: "1:00 - 2:30 PM" },
    ],
  },
  {
    day: "May 21",
    classes: [
      { name: "Calculus 2", time: "10:00 - 11:30 AM" },
      { name: "Intro to Python", time: "3:00 - 4:30 PM" },
    ],
  },
]

const achievements = [
  { name: "First Session", icon: Trophy, color: "bg-yellow-100 text-yellow-600", earned: true },
  { name: "Week Streak", icon: Target, color: "bg-green-100 text-green-600", earned: true },
  { name: "Top Student", icon: Award, color: "bg-purple-100 text-purple-600", earned: false },
]

export function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex 👋</h1>
        <p className="text-gray-600 text-lg">Here's what's next for you today.</p>
      </div>

      {/* Top Section: Three Cards in a Row */}
      <div className="flex gap-4">
        {/* Next Session and Upcoming Schedule Container */}
        <div className="flex-[8] flex gap-4">
          <NextSession {...nextSession} />
          <UpcomingSchedule schedule={upcomingSchedule} />
        </div>

        {/* Progress */}
        <Progress achievements={achievements} />
      </div>

      {/* Bottom Section: Class Hub and Opinion */}
      <div className="grid grid-cols-12 gap-4 mt-4">
        {/* Class Hub Carousel */}
        <ClassHubCarousel hubs={classHubs} />

        {/* Opinion Section */}
        <Card className="col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-xl">
              <MessageCircle className="mr-2 h-6 w-6 text-blue-600" />
              What would you want here?
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center min-h-[200px]">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              My Opinion
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 