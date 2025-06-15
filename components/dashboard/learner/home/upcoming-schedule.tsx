"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Handshake, ChevronUp, ChevronDown } from "lucide-react"

interface Class {
  name: string
  time: string
}

interface ScheduleItem {
  day: string
  classes: Class[]
}

interface UpcomingScheduleProps {
  schedule: ScheduleItem[]
}

export function UpcomingSchedule({ schedule }: UpcomingScheduleProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < schedule.length - 3 ? prev + 1 : prev))
  }

  return (
    <Card className="flex-[3]">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Calendar className="mr-2 h-6 w-6 text-purple-600" />
          Upcoming Schedule
        </CardTitle>
        <Button
          size="sm"
          className="w-full bg-green-100 hover:bg-green-200 text-green-700 border border-green-200 mt-2"
        >
          <Handshake className="mr-2 h-4 w-4" />
          Book a Course
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-8 w-8 p-0"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronUp className="h-4 w-4" />
          </Button>
          <div className="space-y-4 mt-8">
            {schedule.slice(currentIndex, currentIndex + 3).map((session, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-gray-900">{session.classes[0].name}</p>
                  <p className="text-sm text-gray-600">{session.classes[0].time}</p>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 bottom-0 h-8 w-8 p-0"
            onClick={handleNext}
            disabled={currentIndex >= schedule.length - 3}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 