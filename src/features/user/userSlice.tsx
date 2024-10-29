import { User } from "@/models/user.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
          email: '',
          firstName: '',
          id: undefined,
          lastName: '',
          password: '',
          createdAt: '',
          updatedAt: '',
}

export const userSlice = createSlice({
          name: "user",
          initialState,
          reducers: {
                    setUser: (state, action: PayloadAction<User>) => {
                              state = {
                                        ...action.payload
                              };
                    },
          },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer