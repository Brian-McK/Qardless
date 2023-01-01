import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { Axios } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

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
  user: {
    FirstName: null,
    LastName: null,
    Email: null,
    EmailVerified: true,
    PasswordHash: null,
    AddressCode: null,
    AddressDetailed: null
  },
  isSuccessfullyRegistered: false
};

export const registerUser = createAsyncThunk(
  "register/registerUser",
  async (userDetails) => {
    try {
      const response = await axios.post(API_URL, userDetails);
      return response.data;
    } catch (error) {
      return error.message;
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
    formDataToUserCreateDTO: (state, action) => {
      state.user.FirstName = action.payload.firstName;
      state.user.LastName = action.payload.surname;
      state.user.Email = action.payload.email;
      // email verfied and password hash need to be fixed - TODO
      state.user.EmailVerified = true;
      state.user.PasswordHash = action.payload.password;
      state.user.AddressCode = action.payload.eircode;
      const concatAddresses = `${action.payload.address1}, ${action.payload.address2}, ${action.payload.county}`;
      state.user.AddressDetailed = concatAddresses;

      console.log(state.user);
    },
  },
  extraReducers(builder){
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isSuccessfullyRegistered = true;
    })
  }
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
  formDataToUserCreateDTO
} = counterSlice.actions;

export default counterSlice.reducer;
