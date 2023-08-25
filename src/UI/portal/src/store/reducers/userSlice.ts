import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../../models/User';
import { PagingResponse } from '../../models/common/PagingResponse';

interface UserState {
  totalRecords: number;
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  totalRecords: 0,
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Add user reducer
    userAdded(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },

    // Update user reducer
    userUpdated(state, action: PayloadAction<{ id: string; updatedUser: Partial<User> }>) {
      const { id, ...updatedUser } = action.payload;
      const index = state.users.findIndex((user) => user.id === id);
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...updatedUser };
      }
    },

    // Delete user reducer
    userDeleted(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.users = state.users.filter((user) => user.id !== id);
    },

    // Fetch users reducers
    fetchUsersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUsersSuccess(state, action: PayloadAction<PagingResponse<User>>) {
      state.loading = false;
      state.error = null;
      state.users = action.payload.data;
      state.totalRecords = action.payload.rowNum;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.users = [];
      state.totalRecords = 0;
    },
  },
});

export const {
  userAdded,
  userUpdated,
  userDeleted,
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
} = userSlice.actions;

export default userSlice.reducer;