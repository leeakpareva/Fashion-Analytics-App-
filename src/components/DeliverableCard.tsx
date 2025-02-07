import { FC } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Deliverable } from '../types'

interface DeliverableCardProps {
  deliverable: Deliverable;
}

export const DeliverableCard: FC<DeliverableCardProps> = ({ deliverable }) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString()
  }

  return (
    <Card className="border-2 border-black">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{deliverable.title}</CardTitle>
        <Badge variant="outline" className="border-black">
          {deliverable.type}
        </Badge>
      </CardHeader>
      <CardContent>
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">{deliverable.content}</pre>
      </CardContent>
      <CardFooter className="text-sm text-gray-600">
        Created: {formatDate(deliverable.createdAt)}
      </CardFooter>
    </Card>
  )
}
