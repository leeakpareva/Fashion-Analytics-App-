import { FC } from 'react'
import { Card } from "../components/ui/card"
import { DeliverableCard } from '../components/DeliverableCard'
import type { Agent, Deliverable } from '../types'

export const Engineer: FC<{ agent: Agent }> = ({ agent }) => {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">{agent.name} - {agent.role}</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <Card className="border-2 border-black p-6">
          <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
          <ul className="list-disc pl-6">
            {agent.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </Card>

        {agent.currentTask && (
          <Card className="border-2 border-black p-6">
            <h2 className="text-xl font-bold mb-4">Current Task</h2>
            <p>{agent.currentTask.description}</p>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-black rounded-full h-2" 
                  style={{ width: `${agent.currentTask.progress}%` }}
                />
              </div>
            </div>
          </Card>
        )}

        {agent.currentTask?.deliverables.map((deliverable: Deliverable) => (
          <DeliverableCard key={deliverable.id} deliverable={deliverable} />
        ))}
      </div>
    </div>
  )
}
