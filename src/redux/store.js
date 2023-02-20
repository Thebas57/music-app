import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { shazamApi, shazamApiArtist } from "./services/Shazam";

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]: shazamApi.reducer,
    [shazamApiArtist.reducerPath]: shazamApiArtist.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamApi.middleware, shazamApiArtist.middleware),
});
