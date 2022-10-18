import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { RootState } from "..";
import { fetchPosts } from "../../features/posts/postsAPI";

export interface IPost {
  id: number;
  title: string;
  body: string;
  created_at?: string;
  updated_at?: string;
  url: string;
}
export interface IInitialPostsState {
  posts: IPost[];
  status: string;
}

export enum Status {
  Initial = "Not Fetched",
  Loading = "Loading...",
  UpToDate = "Up To Date",
  Deleted = "Deleted",
  Error = "Error",
}

const initialState: IInitialPostsState = {
  posts: [
    {
      id: 0,
      title: "hi there noer",
      body: "this is my first post!",
      created_at: "2022-10-16T20:37:55.636Z",
      updated_at: "2022-10-16T20:37:55.636Z",
      url: "http://localhost:3000/posts/1.json",
    },
  ],
  status: Status.Initial,
};

export const fetchPostsAsync = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetchPosts();
    return response;
  } catch (error) {
    console.error("Error fetching posts!", error);
    return error;
  }
});

const postsSlice = createSlice({
  name: "Posts Slice",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IInitialPostsState>) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Status.Loading;
        });
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.posts = action.payload;
          draftState.status = Status.UpToDate;
        });
      })
      .addCase(fetchPostsAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Status.UpToDate;
        });
      });
  },
});

export const {} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.postsSlice.posts;
export const selectStatus = (state: RootState) => state.postsSlice.status;

export default postsSlice.reducer;
