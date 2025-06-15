"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, Video, MessageCircle } from "lucide-react"

interface NextSessionProps {
  subject: string
  professor: string
  time: string
  startsIn: string
}

export function NextSession({ subject, professor, time, startsIn }: NextSessionProps) {
  return (
    <Card className="flex-[5]">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Clock className="mr-2 h-6 w-6 text-blue-600" />
          Your Next Session
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">{subject}</h3>
            <div className="flex items-center space-x-2 text-gray-600 mt-2">
              <User className="h-5 w-5" />
              <span className="text-lg">{professor}</span>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 flex-grow">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <p className="text-lg font-medium text-blue-900">{time}</p>
              </div>
              <p className="text-base text-blue-700">Starts in {startsIn}</p>
              <div className="flex space-x-3 pt-2">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Video className="mr-2 h-5 w-5" />
                  Join Session
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Message Tutor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 