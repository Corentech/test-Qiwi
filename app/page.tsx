import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { GraduationCap, Users, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Qiwi</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with fellow students who have succeeded in their exams. Learn from peers or share your knowledge by
            teaching others.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/auth/login">
              Login with University SSO
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with students from your university through secure SSO authentication
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Learn</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get help from students who have successfully passed the exams you're preparing for
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Teach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Share your knowledge and help other students succeed in subjects you've mastered
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
