import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Role from "../../models/role/Role";
import { PagingResponse } from "../../models/common/PagingResponse";

interface RoleState {
  totalRecords: number;
  roles: Role[];
  loading: boolean;
  error: string | null;
}

const initialState: RoleState = {
  totalRecords: 0,
  roles: [],
  loading: false,
  error: null,
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    // Add role reducer
    roleAdded(state, action: PayloadAction<Role>) {
      state.roles.push(action.payload);
    },

    // Update role reducer
    roleUpdated(state, action: PayloadAction<{ id: string; updatedrole: Partial<Role> }>) {
      const { id, ...updatedrole } = action.payload;
      const index = state.roles.findIndex((role) => role.id === id);
      if (index !== -1) {
        state.roles[index] = { ...state.roles[index], ...updatedrole };
      }
    },

    // Delete role reducer
    roleDeleted(state, action: PayloadAction<string>) {
      const id = action.payload;
      state.roles = state.roles.filter((role) => role.id !== id);
    },

    // Fetch roles reducers
    fetchRolesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRolesSuccess(state, action: PayloadAction<PagingResponse<Role>>) {
      state.loading = false;
      state.error = null;
      state.roles = action.payload.data;
      state.totalRecords = action.payload.rowNum;
    },
    fetchRolesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.roles = [];
      state.totalRecords = 0;
    },
    fetchRolesAllSucess(state, action: PayloadAction<Role[]>) {
      state.loading = false;
      state.error = null;
      state.roles = action.payload;
    }
  },
});

export const {
  roleAdded,
  roleUpdated,
  roleDeleted,
  fetchRolesStart,
  fetchRolesSuccess,
  fetchRolesAllSucess,
  fetchRolesFailure,
} = roleSlice.actions;

export default roleSlice.reducer;