import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  formStepNumber: 0,
  step1FormData: {
    firstName: null,
    surname: null,
    email: null
  },
  step2FormData: {
    address1: null,
    address2: null,
    county: null
  },
  step3FormData: {
    eircode: null,
    phone: null,
    password: null
  },
  isValidForm: false
 }

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