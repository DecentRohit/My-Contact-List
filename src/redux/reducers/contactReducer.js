// imported redux toolkit methods here
import { toast } from 'react-toastify';
import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")



//defined initial state for contact  
const INITIAL_STATE = { contacts: [], isLoading: false, error: null };

// defined contact reducer function here
const contactSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    contacts: (state, action) => { state.contacts = action.payload; state.isLoading = false },
    loading: (state, action) => { state.isLoading = true },
    error: (state, action) => { state.error = action.payload; state.isLoading = false }

  },

  //defined extraReducers for posting and fetching from API
  extraReducers: (builder) => {
    builder
      .addCase(getInitialState.fulfilled, (state, action) => {
        console.log("getInitialState is fulfilled");


        console.log("getting", action.payload.data);
        state.contacts = [...action.payload.data];
        toast.success(' Contacts Fetched Successfully', {
          autoClose: 1500
        })
      })
      .addCase(getInitialState.rejected, (state, action) => {
        console.log("getInitialState is rejected");
        state.error = action.error.message;
        toast.error(' Failed to fetch contacts', {
          autoClose: 1500
        })
        state.isLoading = false;
      })
      .addCase(postContacts.fulfilled, (state, action) => {
        console.log("Post Contact is fulfilled");
        console.log("posting", action.payload);
        toast.success(' Contact Added Successfully', {
          autoClose: 1500
        })
        state.contacts.push(action.payload);
      })
      .addCase(postContacts.rejected, (state, action) => {
        console.log("Post Contact is rejected");
        state.error = action.error.message;
        toast.error(' Failed to Add contact', {
          autoClose: 1500
        })
        state.isLoading = false;
      });
  }
})

//defined createAsyncThunk to fetch data from API from reducers itself
export const getInitialState = createAsyncThunk("contacts/getInitialState",
  () => {

    //returns promise for passing in extraReducer
    return axios.get("https://jsonplaceholder.typicode.com/users")

  })
//defined createAsyncThunk to post data in API(dummy request)
export const postContacts = createAsyncThunk("postContact/API",
  async (payload) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    })
    console.log("response", response)
    //returns promise for passing in extraReducer
    return response.json();
  })


// export the contacts reducer function and action creators
export const contactReducer = contactSlice.reducer;
export const actions = contactSlice.actions;
// export the contacts selector function 
export const contactSelector = (state) => state.contactReducer;

