"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { ClassCard } from "./class-card"
import { mockPrograms, mockYears, mockQuarters, getMockCourses } from "./mock-data"

type ProgramId = "business-management" | "computer-science" | "engineering"
type YearId = "bachelor1" | "bachelor2" | "bachelor3" | "master1" | "master2"
type QuarterId = "Q1" | "Q2"

export function Classes() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramId>(mockPrograms[0].id as ProgramId)
  const [selectedYear, setSelectedYear] = useState<YearId>(mockYears[0].id as YearId)
  const [selectedQuarter, setSelectedQuarter] = useState<QuarterId>(mockQuarters[0].id as QuarterId)
  const [newCourseCode, setNewCourseCode] = useState("")
  const [hiddenCourses, setHiddenCourses] = useState<string[]>([])

  const courses = getMockCourses(selectedProgram, selectedYear, selectedQuarter)
  const visibleCourses = courses.filter(course => !hiddenCourses.includes(course.code))

  const addCourse = () => {
    if (newCourseCode) {
      setHiddenCourses(hiddenCourses.filter(code => code !== newCourseCode))
      setNewCourseCode("")
    }
  }

  const removeCourse = (courseCode: string) => {
    setHiddenCourses([...hiddenCourses, courseCode])
  }

  const selectedProgramName = mockPrograms.find(p => p.id === selectedProgram)?.name || selectedProgram
  const selectedYearName = mockYears.find(y => y.id === selectedYear)?.name || selectedYear

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes Cours</h1>
        <p className="text-gray-600 text-lg">Gérez votre programme d'études et vos cours</p>
      </div>

      {/* Program Selection and Add Course */}
      <div className="grid grid-cols-3 gap-6">
        {/* Mon Programme */}
        <Card className="col-span-2">
          <CardContent className="pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Mon programme
              </h3>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Formation</label>
                <select 
                  value={selectedProgram} 
                  onChange={(e) => setSelectedProgram(e.target.value as ProgramId)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  {mockPrograms.map(program => (
                    <option key={program.id} value={program.id}>
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-5">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Année d'étude</label>
                <select 
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value as YearId)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  {mockYears.map(year => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Quadrimestre</label>
                <select 
                  value={selectedQuarter} 
                  onChange={(e) => setSelectedQuarter(e.target.value as QuarterId)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
                >
                  {mockQuarters.map(quarter => (
                    <option key={quarter.id} value={quarter.id}>
                      {quarter.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ajouter un Cours */}
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Ajouter un cours</h3>
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Code du cours</label>
                <Input
                  placeholder="ex: ECON1001"
                  value={newCourseCode}
                  onChange={(e) => setNewCourseCode(e.target.value.toUpperCase())}
                  className="h-9"
                />
              </div>
              <Button onClick={addCourse} disabled={!newCourseCode} className="h-9">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <Card>
        <CardHeader>
          <div className="flex items-baseline">
            <h2 className="text-xl font-semibold text-gray-900">Mes cours</h2>
            <span className="ml-2 text-sm text-gray-600">
              ({selectedProgramName} - {selectedYearName} - {selectedQuarter})
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleCourses.map((course) => (
              <ClassCard
                key={`${selectedProgram}-${selectedYear}-${selectedQuarter}-${course.code}`}
                code={course.code}
                name={course.name}
                credits={course.credits}
                onRemove={() => removeCourse(course.code)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 