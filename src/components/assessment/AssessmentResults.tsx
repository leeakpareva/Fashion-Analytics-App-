import React from 'react';
import { AssessmentResult } from '../../types/assessment';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import SkillLevel from './SkillLevel';

interface AssessmentResultsProps {
  results: AssessmentResult;
}

const AssessmentResults = ({ results }: AssessmentResultsProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Overall Score: {results.overallScore}%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {results.skillScores.map((skill) => (
              <div key={skill.name} className="flex justify-between items-center">
                <span>{skill.name}</span>
                <SkillLevel level={Math.round(skill.score / 25)} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommended Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {results.recommendedCourses.map((course) => (
              <div key={course.id} className="p-4 border rounded-lg">
                <h3 className="font-semibold text-lg">{course.title}</h3>
                <p className="text-gray-600 mt-1">{course.description}</p>
                <div className="mt-2 flex gap-2">
                  {course.skillsTargeted.map((skill) => (
                    <span key={skill} className="text-sm px-2 py-1 bg-purple-100 text-purple-700 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentResults;