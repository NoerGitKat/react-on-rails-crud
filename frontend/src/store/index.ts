import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import postsReducer from "./reducers/posts";

export const store = configureStore({
  reducer: {
    postsSlice: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
