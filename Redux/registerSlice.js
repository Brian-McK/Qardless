import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";

const API_URL = "https://9e3d-64-43-50-159.eu.ngrok.io/api/enduser";

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
  isLoading: false,
  userToRegister: {},
  registeredUsers: [],
  error: null,
};

// export const registerUser = createAsyncThunk(
//   "register/registerUser",
//   async (payload) => {
//     try {
//       const response = await axios.post(API_URL, payload);
//       return response.data;
//     } catch (err) {
//       console.log(err.message)
//     }
//   }
// );

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (payload) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

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
    resetStep3FormData: (state, action) => {
      return initialState;
    },
  },
  extraReducers(builder) {
    // listening for the promise status action types
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
        console.log("pending...")
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.registeredUsers.unshift(action.payload);
        console.log("fulfilled...")
        
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        console.log("rejected...")
      });
  },
});

// Export like in this example: https://www.youtube.com/watch?v=93CR_yURoII - TODO
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
  isLoading,
} = counterSlice.actions;

export default counterSlice.reducer;
