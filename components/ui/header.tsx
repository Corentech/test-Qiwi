'use client'

import { Button } from "./button"
import { GraduationCap } from "lucide-react"

interface HeaderProps {
  title: string
  onSwitchMode?: () => void
}

export function Header({ title, onSwitchMode }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      {onSwitchMode && (
        <Button 
          variant="outline"
          className="flex items-center gap-2"
          onClick={onSwitchMode}
        >
          Switch to Teaching Mode
          <GraduationCap className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
} 