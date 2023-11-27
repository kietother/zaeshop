import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AlbumPagingResponse from "../../models/album/AlbumPagingResponse";
import AlbumPagingRequest from "../../models/album/AlbumPagingRequest";
import { portalServer } from "../../services/baseUrls";
import api from "../../services/interceptor";
import { AxiosRequestConfig } from "axios";
import { PagingResponse } from "../../models/common/PagingResponse";
import ServerResponse from "../../models/common/ServerResponse";

// Thunks
const getAlbumsPagingAsyncThunk = createAsyncThunk<
    ServerResponse<PagingResponse<AlbumPagingResponse>>,
    AlbumPagingRequest,
    { rejectValue: string }
>('album/paging', async (model, thunkApi) => {
    const config: AxiosRequestConfig<AlbumPagingRequest> = {
        params: model
    };
    const response = await api.get<ServerResponse<PagingResponse<AlbumPagingResponse>>>(portalServer + `/api/album`, config);
    return response.data;
});

interface AlbumState {
    totalRecords: number;
    albums: AlbumPagingResponse[];
    loading: boolean;
    error: string | null;
}

const initialState: AlbumState = {
    totalRecords: 0,
    albums: [],
    loading: false,
    error: null
};


export const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAlbumsPagingAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getAlbumsPagingAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.albums = action.payload.data.data;
                state.totalRecords = action.payload.data.rowNum;
            }
        });

        builder.addCase(getAlbumsPagingAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        })
    }
});

export { getAlbumsPagingAsyncThunk };
export default albumSlice.reducer;