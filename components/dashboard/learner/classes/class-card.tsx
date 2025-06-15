"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, UserPlus, MoreHorizontal, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ClassCardProps {
  code: string
  name: string
  credits: number
  onRemove: () => void
}

const colorClasses = [
  "bg-blue-100 text-blue-600",
  "bg-green-100 text-green-600",
  "bg-purple-100 text-purple-600",
  "bg-orange-100 text-orange-600",
  "bg-red-100 text-red-600",
  "bg-yellow-100 text-yellow-600",
  "bg-pink-100 text-pink-600",
  "bg-indigo-100 text-indigo-600",
]

export function ClassCard({ code, name, credits, onRemove }: ClassCardProps) {
  const initial = name.charAt(0).toUpperCase()
  // Utiliser le code du cours pour déterminer la couleur de manière déterministe
  const colorIndex = code.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colorClasses.length
  const colorClass = colorClasses[colorIndex]

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3 flex-1">
          <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}>
            <span className="font-bold text-lg">{initial}</span>
          </div>
          <h4 className="font-semibold text-gray-900 text-sm flex-1">{name}</h4>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onRemove}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove class
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mb-4 ml-13">
        <p className="text-xs text-gray-600">{code} - {credits} crédits</p>
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
}