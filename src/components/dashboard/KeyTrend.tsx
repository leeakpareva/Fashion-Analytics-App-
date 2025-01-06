import React from 'react';
import { Card, CardContent } from '../ui/card';

interface KeyTrendProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const KeyTrend = ({ icon, title, description }: KeyTrendProps) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex items-start gap-4">
        {icon}
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default KeyTrend;