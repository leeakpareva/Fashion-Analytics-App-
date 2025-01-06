import React from 'react';
import { Course } from '../../types/assessment';

interface RecommendedCoursesProps {
  courses: Course[];
}

const RecommendedCourses = ({ courses }: RecommendedCoursesProps) => {
  return (
    <div className="bg-gray-900 rounded-lg p-8">
      <h3 className="text-xl font-semibold text-white mb-6">Recommended Courses</h3>
      <div className="grid gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-medium text-white mb-2">{course.title}</h4>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-purple-400">{course.level}</div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-purple-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;