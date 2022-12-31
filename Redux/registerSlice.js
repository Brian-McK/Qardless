import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";

const API_URL = "https://api.publicapis.org/entries";

const initialState = {
  formStepNumber: 0,
  step1FormData: {
    firstName: null,
    surname: null,
    email: null,
  },
  step2FormData: {
    address1: null,
    address2: null,
    county: null,
  },
  step3FormData: {
    eircode: null,
    phone: null,
    password: null,
  },
  fullFormData: null,
  isLoading: false,
  isValidForm: false,
};

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  try {
    const resp = await axios(API_URL);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    
  }
});

export const counterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    currentStep: (state, action) => {
      state.formStepNumber = action.payload;
    },
    resetCurrentStep: (state, action) => {
      return initialState;
    },
    getStep1FormData: (state, action) => {
      state.step1FormData = action.payload;
    },
    resetStep1FormData: (state, action) => {
      return initialState;
    },
    getStep2FormData: (state, action) => {
      state.step2FormData = action.payload;
    },
    resetStep2FormData: (state, action) => {
      return initialState;
    },
    getStep3FormData: (state, action) => {
      state.step3FormData = action.payload;
    },
    mergeFormData: (state, action) => {
      console.log(action);
      state.fullFormData = action.payload;
      console.log(state.fullFormData);
    },
    resetStep3FormData: (state, action) => {
      return initialState;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      // loading state
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // return resp.json if promise if fullfilled
      console.log(action);
      state.isLoading = false;
    },
    [getCartItems.rejected]: (state) => {
      // rejected state
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  currentStep,
  resetCurrentStep,
  getStep1FormData,
  resetStep1FormData,
  getStep2FormData,
  resetStep2FormData,
  getStep3FormData,
  resetStep3FormData,
  mergeFormData
} = counterSlice.actions;

export default counterSlice.reducer;
