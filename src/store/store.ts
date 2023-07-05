import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../hooks/useProduct";
import { modalReducer } from "../hooks/useModal";
import { darkModeReducer } from "../hooks/useDarkMode";

export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
    darkmode: darkModeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
