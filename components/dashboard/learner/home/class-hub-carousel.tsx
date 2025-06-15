"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, UserPlus, ChevronLeft, ChevronRight } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface ClassHub {
  id: number
  name: string
  icon: LucideIcon
  color: string
}

interface ClassHubCarouselProps {
  hubs: ClassHub[]
}

export function ClassHubCarousel({ hubs }: ClassHubCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < hubs.length - 2 ? prev + 1 : prev))
  }

  return (
    <Card className="col-span-8">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl">
          <BookOpen className="mr-2 h-6 w-6 text-green-600" />
          Your Class Hubs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-8 w-8 p-0"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-12 overflow-hidden mx-auto" style={{ width: 'calc(2 * 288px + 48px)' }}>
              {hubs.map((hub, index) => {
                const IconComponent = hub.icon
                return (
                  <div
                    key={hub.id}
                    className="flex-shrink-0 w-72 border rounded-lg p-4 hover:shadow-md transition-all duration-300"
                    style={{
                      transform: `translateX(${(index - currentIndex) * 100}%)`,
                      opacity: index >= currentIndex && index < currentIndex + 2 ? 1 : 0,
                      position: 'absolute',
                      width: '288px',
                    }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${hub.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-gray-900">{hub.name}</h4>
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

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-8 w-8 p-0"
              onClick={handleNext}
              disabled={currentIndex >= hubs.length - 2}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 