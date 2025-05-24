
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Wand2, 
  Download, 
  FileText, 
  Presentation,
  Save
} from 'lucide-react';

export const LecturePreparation = () => {
  const [lessonForm, setLessonForm] = useState({
    subject: '',
    class: '',
    topic: '',
    subtopics: '',
    specialNotes: '',
    duration: '60'
  });
  const [generatedContent, setGeneratedContent] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setLessonForm(prev => ({ ...prev, [field]: value }));
  };

  const generateLessonPlan = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent({
        lessonPlan: `
# ${lessonForm.topic} - Lesson Plan

## Learning Objectives
- Understand the fundamental concepts of ${lessonForm.topic}
- Apply knowledge through practical examples
- Develop problem-solving skills

## Lesson Structure (${lessonForm.duration} minutes)

### Introduction (10 minutes)
- Review previous concepts
- Introduce today's topic: ${lessonForm.topic}

### Main Content (35 minutes)
${lessonForm.subtopics.split(',').map(subtopic => 
  `- **${subtopic.trim()}**: Detailed explanation with examples`
).join('\n')}

### Activities (10 minutes)
- Interactive exercises
- Group discussions
- Q&A session

### Conclusion (5 minutes)
- Summary of key points
- Assignment for next class

## Special Notes
${lessonForm.specialNotes}

## Resources Needed
- Whiteboard/Projector
- Handouts
- Calculator (if applicable)
        `,
        slides: [
          { title: `${lessonForm.topic} - Introduction`, content: 'Welcome to today\'s lesson' },
          { title: 'Learning Objectives', content: 'What we will learn today' },
          { title: 'Main Concepts', content: 'Core concepts and theories' },
          { title: 'Examples', content: 'Practical applications' },
          { title: 'Summary', content: 'Key takeaways' }
        ]
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5" />
            <span>AI-Powered Lesson Preparation</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={lessonForm.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                placeholder="e.g., Mathematics"
              />
            </div>
            <div>
              <Label htmlFor="class">Class</Label>
              <Input
                id="class"
                value={lessonForm.class}
                onChange={(e) => handleInputChange('class', e.target.value)}
                placeholder="e.g., Grade 10-A"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="topic">Main Topic</Label>
            <Input
              id="topic"
              value={lessonForm.topic}
              onChange={(e) => handleInputChange('topic', e.target.value)}
              placeholder="e.g., Quadratic Equations"
            />
          </div>
          
          <div>
            <Label htmlFor="subtopics">Sub-topics (comma separated)</Label>
            <Input
              id="subtopics"
              value={lessonForm.subtopics}
              onChange={(e) => handleInputChange('subtopics', e.target.value)}
              placeholder="e.g., Standard form, Factoring, Graphing"
            />
          </div>
          
          <div>
            <Label htmlFor="duration">Duration (minutes)</Label>
            <Input
              id="duration"
              type="number"
              value={lessonForm.duration}
              onChange={(e) => handleInputChange('duration', e.target.value)}
              placeholder="60"
            />
          </div>
          
          <div>
            <Label htmlFor="specialNotes">Special Notes</Label>
            <Textarea
              id="specialNotes"
              value={lessonForm.specialNotes}
              onChange={(e) => handleInputChange('specialNotes', e.target.value)}
              placeholder="Any special instructions, student considerations, or teaching aids needed..."
              rows={3}
            />
          </div>
          
          <Button 
            onClick={generateLessonPlan} 
            disabled={isGenerating || !lessonForm.topic}
            className="w-full"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            {isGenerating ? 'Generating AI Lesson Plan...' : 'Generate AI Lesson Plan'}
          </Button>
        </CardContent>
      </Card>

      {generatedContent && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lesson Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>Generated Lesson Plan</span>
                </span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Export PDF
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm">{generatedContent.lessonPlan}</pre>
              </div>
            </CardContent>
          </Card>

          {/* Presentation Slides */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Presentation className="w-5 h-5" />
                  <span>Presentation Slides</span>
                </span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Export PPT
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {generatedContent.slides.map((slide, index) => (
                  <div key={index} className="border rounded-lg p-3 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{slide.title}</h4>
                      <Badge variant="secondary">Slide {index + 1}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{slide.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
