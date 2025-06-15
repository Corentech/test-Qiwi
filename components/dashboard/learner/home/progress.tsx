"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Award } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface Achievement {
  name: string
  icon: LucideIcon
  color: string
  earned: boolean
}

interface ProgressProps {
  achievements: Achievement[]
}

export function Progress({ achievements }: ProgressProps) {
  return (
    <Card className="flex-[4]">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <Trophy className="mr-2 h-6 w-6 text-yellow-600" />
          Your Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={index} className="flex items-center space-x-3">
                <div className={`flex-shrink-0 w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-gray-900">{achievement.name}</p>
                  <p className="text-sm text-gray-600">
                    {achievement.earned ? "Earned" : "Not earned yet"}
                  </p>
                </div>
              </div>
            )
          })}
          <Button variant="outline" className="w-full mt-4">
            View all achievements
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 