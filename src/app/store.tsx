import { configureStore } from "@reduxjs/toolkit";
import { accessLevelsApi } from "../services/accessLevelsApi";
import { accessLevelSlice } from "@/features/division/accessLevelSlice";
import { userSlice } from "@/features/user/userSlice";
import { authApi } from "@/services/authApi";
import { userApi } from "@/services/userApi";
import { csrfApi } from "@/services/csrfApi";

export const store = configureStore({
          reducer: {
                    [csrfApi.reducerPath]: csrfApi.reducer,
                    [authApi.reducerPath]: authApi.reducer,
                    [userApi.reducerPath]: userApi.reducer,
                    [accessLevelsApi.reducerPath]: accessLevelsApi.reducer,
                    accessLevel: accessLevelSlice.reducer,
                    user: userSlice.reducer
          },
          middleware: (getDefaultMiddleware) =>
                    getDefaultMiddleware()
                              .concat(accessLevelsApi.middleware)
                              .concat(authApi.middleware)
                              .concat(userApi.middleware)
                              .concat(csrfApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch