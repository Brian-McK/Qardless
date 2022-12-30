import { createSlice } from '@reduxjs/toolkit'

const initialState = { formStepNumber: 0 }

export const counterSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    currentStep: (state, action) => {
      console.log(action)
      state.formStepNumber = action.payload;
    },
    resetCurrentStep: (state, action) => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const { currentStep } = counterSlice.actions

export default counterSlice.reducer