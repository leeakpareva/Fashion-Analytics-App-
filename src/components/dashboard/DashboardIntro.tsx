import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';
import KeyTrend from './KeyTrend';
import RecommendationList from './RecommendationList';
import MethodologyNote from './MethodologyNote';
import { keyTrends, recommendations } from '../../data/dashboardData';

const DashboardIntro = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
      {/* Executive Summary */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold">AI Jobs Market Overview</h2>
            <p className="text-gray-600 mt-2">
              Comprehensive analysis of global AI talent supply and demand projections for 2024-2029.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2"
          >
            {expanded ? "Show Less" : "Learn More"}
            {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>

        {expanded && (
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-600 leading-relaxed">
                The artificial intelligence job market is experiencing unprecedented growth, 
                driven by widespread AI adoption across industries. This dashboard provides 
                data-driven insights into market dynamics, helping stakeholders understand 
                current trends and future projections. Our analysis combines industry reports, 
                market research, and historical data to forecast supply-demand patterns in the 
                AI talent ecosystem.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Key Trends */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {keyTrends.map((trend, index) => (
          <KeyTrend key={index} {...trend} />
        ))}
      </div>

      {expanded && (
        <>
          <RecommendationList recommendations={recommendations} />
          <MethodologyNote />
        </>
      )}
    </div>
  );
};

export default DashboardIntro;