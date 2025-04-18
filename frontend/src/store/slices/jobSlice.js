import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    message: null,
    singleJob: {},
    myJobs: [],
  },
  reducers: {
    requestForAllJobs(state, action) {
      state.loading = true;
      state.error = null;
    },
    successForAllJobs(state, action) {
      state.loading = false;
      state.jobs = action.payload;
      state.error = null;
    },
    failureForAllJobs(state, action) {
      state.loading = false;
      state.error = action.payload;
    }, 
    clearAllErrors(state, action) {
      state.error = null;
      state.jobs = state.jobs;
    },
    resetJobSlice(state, action) {
      state.error = null;
      state.jobs = state.jobs;
      state.loading = false;
      state.message = null;
      state.myJobs = state.myJobs;
      state.singleJob = {};
    },
  },
});

export const fetchJobs =
  (city, niche, searchKeyword = "") =>
  async (dispatch) => {
    try { 
      dispatch(jobSlice.actions.requestForAllJobs());
      let link = "http://localhost:4000/api/v1/job/getall?";
      let queryParams = [];
      if (searchKeyword) {
        queryParams.push(`searchKeyword=${searchKeyword}`);
      }
      if (city) {
        queryParams.push(`city=${city}`);
      }

      /***************************************************/
      /* BUG No.3 */
    //   if (city && city === "All") {
    //     queryParams = [];
    //     if (searchKeyword) {
    //       queryParams.push(`searchKeyword=${searchKeyword}`);
    //     }
    //   }
      /***************************************************/

      if (niche) {
        queryParams.push(`niche=${niche}`);
      }

      /***************************************************/
      /* BUG No.4 */
    //   if (niche && niche === "All") {
    //     queryParams = [];
    //     if (searchKeyword) {
    //       queryParams.push(`searchKeyword=${searchKeyword}`);
    //     }
    //     if (city && city !== "All") {
    //       queryParams.push(`city=${city}`);
    //     }
    //   }
      /***************************************************/

      link += queryParams.join("&");
      const response = await axios.get(link, { withCredentials: true });
      dispatch(jobSlice.actions.successForAllJobs(response.data.jobs));
      dispatch(jobSlice.actions.clearAllErrors());
    } catch (error) {
      dispatch(jobSlice.actions.failureForAllJobs(error.response.data.message));
    }
  };

export const clearAllErrors = () => (dispatch) => {
    dispatch(jobSlice.actions.clearAllErrors());

};
export const resetJobSlice = () => (dispatch) => {
    dispatch(jobSlice.actions.resetJobSlice());
};

export const clearAllJobErrors = () => (dispatch) => {
  dispatch(jobSlice.actions.clearAllErrors());
};

export default jobSlice.reducer;