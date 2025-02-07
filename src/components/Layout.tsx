import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const agents = [
  { name: 'Alice', role: 'Product Manager', pageUrl: '/product-manager' },
  { name: 'Bob', role: 'Architect', pageUrl: '/architect' },
  { name: 'Eve', role: 'Project Manager', pageUrl: '/project-manager' },
  { name: 'Alex', role: 'Engineer', pageUrl: '/engineer' },
  { name: 'Edward', role: 'QA Engineer', pageUrl: '/qa-engineer' }
]

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              {agents.map((agent) => (
                <Link
                  key={agent.name}
                  to={agent.pageUrl}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === agent.pageUrl
                      ? 'border-black'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  {agent.name} ({agent.role})
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-t-2 border-black py-4 text-center text-sm text-gray-600">
        Designed + Coded by Lee Akpareva (Agent Assist - DEVIN)
      </footer>
    </div>
  )
}
