import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface RecommendationListProps {
  recommendations: string[];
}

const RecommendationList = ({ recommendations }: RecommendationListProps) => (
  <Card>
    <CardHeader>
      <CardTitle>Strategic Recommendations</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <p className="text-gray-600">{rec}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);