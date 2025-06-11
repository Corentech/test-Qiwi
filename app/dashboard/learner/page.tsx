'use client';

import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Search, Calendar, BookOpen, Users, Clock, Star } from 'lucide-react';

export default function LearnerDashboard() {
  const router = useRouter();

  // Mock data for upcoming sessions
  const upcomingSessions = [
    {
      id: 1,
      subject: 'Mathematics',
      tutor: 'Dr. Sarah Johnson',
      time: '10:00 AM',
      duration: '60 min',
    },
    {
      id: 2,
      subject: 'Physics',
      tutor: 'Prof. Michael Chen',
      time: '2:30 PM',
      duration: '90 min',
    },
  ];

  // Mock data for available tutors
  const availableTutors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      subject: 'Mathematics',
      rating: 4.9,
      students: 120,
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      subject: 'Physics',
      rating: 4.8,
      students: 95,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Learner Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => router.push('/dashboard')}
          >
            Switch to Teacher
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search for courses, tutors, or sessions..."
            className="pl-10"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Sessions */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Sessions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div>
                      <h3 className="font-medium">{session.subject}</h3>
                      <p className="text-sm text-gray-500">{session.tutor}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{session.time}</p>
                      <p className="text-sm text-gray-500">{session.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Course Progress */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Course Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Mathematics</span>
                    <span className="text-sm text-gray-500">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Physics</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Available Tutors */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Available Tutors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {availableTutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div>
                      <h3 className="font-medium">{tutor.name}</h3>
                      <p className="text-sm text-gray-500">{tutor.subject}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{tutor.rating}</span>
                      </div>
                      <p className="text-sm text-gray-500">{tutor.students} students</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            Schedule New Session
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            Browse Courses
          </Button>
          <Button variant="outline" className="flex items-center justify-center gap-2">
            <Clock className="h-4 w-4" />
            View Learning History
          </Button>
        </div>
      </div>
    </div>
  );
} 