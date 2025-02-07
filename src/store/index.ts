import { configureStore } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { WorkflowState, Agent, AgentTask } from '../types'

const initialState: WorkflowState = {
  currentStage: null,
  allStages: [],
  startTime: new Date(),
  status: 'idle'
}

const workflowSlice = createSlice({
  name: 'workflow',
  initialState,
  reducers: {
    updateWorkflow: (state, action: PayloadAction<Partial<WorkflowState>>) => {
      return { ...state, ...action.payload }
    },
    updateAgentTask: (state, action: PayloadAction<{ agent: string, task: AgentTask }>) => {
      const stage = state.allStages.find(s => s.agent.name === action.payload.agent)
      if (stage) {
        stage.task = action.payload.task
      }
    },
    addStage: (state, action: PayloadAction<{ agent: Agent, task: AgentTask }>) => {
      state.allStages.push({
        agent: action.payload.agent,
        task: action.payload.task
      })
    },
    setCurrentStage: (state, action: PayloadAction<string>) => {
      const stage = state.allStages.find(s => s.agent.name === action.payload)
      if (stage) {
        state.currentStage = stage
      }
    }
  }
})

export const store = configureStore({
  reducer: {
    workflow: workflowSlice.reducer
  }
})

export const { updateWorkflow, updateAgentTask, addStage, setCurrentStage } = workflowSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
