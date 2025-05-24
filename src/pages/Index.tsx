
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, BookOpen, Users, Settings, MessageCircle, BarChart3 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'student',
      title: 'Student',
      description: 'Access your lectures, homework, and AI-powered study tools',
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-purple-500 to-blue-600',
      route: '/student-dashboard'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Manage classes, assignments, and track student progress',
      icon: BookOpen,
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      route: '/teacher-dashboard'
    },
    {
      id: 'parent',
      title: 'Parent',
      description: 'Monitor your child\'s academic progress and activities',
      icon: Users,
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      route: '/parent-dashboard'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage the entire educational platform and users',
      icon: Settings,
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
      route: '/admin-dashboard'
    }
  ];

  const handleRoleSelect = (role: any) => {
    setSelectedRole(role.id);
    // For now, navigate to student dashboard for demo
    if (role.id === 'student') {
      navigate('/student-dashboard');
    } else {
      // Placeholder for other roles
      console.log(`Selected role: ${role.title}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  EduAI Platform
                </h1>
                <p className="text-sm text-gray-600">Powered by Artificial Intelligence</p>
              </div>
            </div>
            <Button variant="outline" className="bg-white/50 hover:bg-white/80">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to the Future of
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              K-12 Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An AI-powered platform designed to enhance learning experiences for students, 
            empower teachers with intelligent tools, and keep parents connected to their child's educational journey.
          </p>
        </div>

        {/* Role Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Choose Your Role to Get Started
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <Card 
                  key={role.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 group ${
                    selectedRole === role.id ? 'border-purple-400 shadow-lg' : 'border-gray-200 hover:border-purple-300'
                  }`}
                  onClick={() => handleRoleSelect(role)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl ${role.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">{role.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center text-gray-600 leading-relaxed">
                      {role.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features Preview */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-purple-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Powered by Advanced AI Technology
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">AI-Generated Notes</h4>
              <p className="text-gray-600 text-sm">Intelligent lecture summaries and explanations tailored to each student's learning pace</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Smart Doubt Resolution</h4>
              <p className="text-gray-600 text-sm">24/7 AI-powered chat assistant for instant help with any academic question</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Progress Analytics</h4>
              <p className="text-gray-600 text-sm">Comprehensive insights into learning patterns and academic performance</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
