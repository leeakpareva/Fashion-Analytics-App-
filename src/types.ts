interface Deliverable {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  type: 'prd' | 'design' | 'tasks' | 'code' | 'tests' | 'test-results';
}

interface AgentTask {
  id: string;
  agent: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked' | 'failed';
  description: string;
  startTime?: Date;
  endTime?: Date;
  dependencies?: string[];
  deliverables: Deliverable[];
  handoffNotes?: string;
  nextAgent?: string;
  progress: number;
  errors?: string[];
}

interface Agent {
  name: string;
  role: string;
  description: string;
  responsibilities: string[];
  currentTask?: AgentTask;
  completedTasks: AgentTask[];
  handoffInstructions: string;
  pageUrl: string;
  stats: {
    tasksCompleted: number;
    successRate: number;
    averageTaskDuration: number;
  };
}

interface WorkflowStage {
  agent: Agent;
  task: AgentTask;
  nextStage?: WorkflowStage;
}

interface WorkflowState {
  currentStage: WorkflowStage | null;
  allStages: WorkflowStage[];
  startTime: Date;
  status: 'idle' | 'running' | 'completed' | 'failed';
}

export type { AgentTask, Agent, Deliverable, WorkflowStage, WorkflowState };
