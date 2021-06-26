import { createSlice } from "@reduxjs/toolkit";
import { State } from "../state";
import HttpUtil from "../../shared/http-util";

const initialState: State<any> = {
  payload: {},
  errorMessage: "",
  loading: false,
  isSuccess: false,
  hasErrors: false,
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginLoading: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.isSuccess=true;
      state.payload = payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.isSuccess=false;
      state.hasErrors = true;
      state.errorMessage = "Network Failed";
    },
  },
});

export const { loginLoading, loginSuccess, loginFailure } = slice.actions;

export const loginSelector = (state: any) => state.login;

export default slice.reducer;

export const login = () => {
  return async (dispatch:any) => {
      dispatch(loginLoading())

      try {
          const response = await HttpUtil.get(`posts`,{});

          const data = await response;

          dispatch(loginSuccess(data))

      } catch(error) {
          dispatch(loginFailure())
      }
  }
}
