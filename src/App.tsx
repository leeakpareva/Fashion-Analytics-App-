import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Layout } from './components/Layout'
import { ProductManager } from './pages/ProductManager'
import { Architect } from './pages/Architect'
import { ProjectManager } from './pages/ProjectManager'
import { Engineer } from './pages/Engineer'
import { QaEngineer } from './pages/QaEngineer'
import { store } from './store'
import type { Agent } from './types'

const agents: Agent[] = [
  {
    name: "Alice",
    role: "Product Manager",
    description: "Define product vision and create product backlog",
    responsibilities: [
      "Define the product vision and goals",
      "Gather requirements from stakeholders",
      "Create and maintain the product backlog",
      "Prioritize features based on business impact",
      "Work closely with development and design teams"
    ],
    handoffInstructions: "Provide prioritized requirements, functional/non-functional expectations, and project constraints to the Architect",
    completedTasks: [],
    pageUrl: '/product-manager',
    stats: {
      tasksCompleted: 0,
      successRate: 0,
      averageTaskDuration: 0
    }
  },
  {
    name: "Bob",
    role: "Architect",
    description: "Design system architecture and technical specifications",
    responsibilities: [
      "Design the system architecture based on the product backlog",
      "Define database models, APIs, and infrastructure requirements",
      "Identify risks and dependencies in technical implementation",
      "Ensure scalability, security, and maintainability of the system"
    ],
    handoffInstructions: "Share system design documentation, core technical components, and implementation risks with the Project Manager",
    completedTasks: [],
    pageUrl: '/architect',
    stats: {
      tasksCompleted: 0,
      successRate: 0,
      averageTaskDuration: 0
    }
  },
  {
    name: "Eve",
    role: "Project Manager",
    description: "Plan and coordinate project execution",
    responsibilities: [
      "Plan project timelines, sprints, and deliverables",
      "Assign tasks to the appropriate teams",
      "Monitor project progress and resolve bottlenecks",
      "Communicate with stakeholders regarding project status",
      "Ensure that milestones are met on schedule"
    ],
    handoffInstructions: "Provide clear roadmap, sprint planning, and task dependencies to the development team",
    completedTasks: [],
    pageUrl: '/project-manager',
    stats: {
      tasksCompleted: 0,
      successRate: 0,
      averageTaskDuration: 0
    }
  },
  {
    name: "Alex",
    role: "Engineer",
    description: "Implement system components and features",
    responsibilities: [
      "Write elegant, readable, extensible code",
      "Implement features according to technical specifications",
      "Collaborate with QA on testing and bug fixes",
      "Maintain code quality and documentation",
      "Optimize performance and reliability"
    ],
    handoffInstructions: "Provide implemented code and documentation to QA Engineer",
    completedTasks: [],
    pageUrl: '/engineer',
    stats: {
      tasksCompleted: 0,
      successRate: 0,
      averageTaskDuration: 0
    }
  },
  {
    name: "Edward",
    role: "QA Engineer",
    description: "Ensure code quality and functionality",
    responsibilities: [
      "Write comprehensive test cases",
      "Perform automated and manual testing",
      "Identify and document bugs",
      "Validate fixes and perform regression testing",
      "Ensure quality standards are met"
    ],
    handoffInstructions: "Report test results and quality metrics to Project Manager",
    completedTasks: [],
    pageUrl: '/qa-engineer',
    stats: {
      tasksCompleted: 0,
      successRate: 0,
      averageTaskDuration: 0
    }
  }
];

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/product-manager" element={<ProductManager agent={agents[0]} />} />
            <Route path="/architect" element={<Architect agent={agents[1]} />} />
            <Route path="/project-manager" element={<ProjectManager agent={agents[2]} />} />
            <Route path="/engineer" element={<Engineer agent={agents[3]} />} />
            <Route path="/qa-engineer" element={<QaEngineer agent={agents[4]} />} />
            <Route path="/" element={<Navigate to="/product-manager" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
