import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AlbumDetail from "../../models/album-detail-collection/AlbumDetail";
import AlbumExtraInfo from "../../models/album-detail-collection/AlbumExtraInfo";
import ServerResponse from "../../models/common/ServerResponse";
import axiosApiInstance from "../../services/interceptor";
import { portalServer } from "../../services/baseUrls";
import CollectionPagingResponse from "../../models/album-detail-collection/CollectionPagingResponse";
import { PagingResponse } from "../../models/common/PagingResponse";
import CollectionPagingRequest from "../../models/album-detail-collection/CollectionPagingRequest";
import { AxiosRequestConfig } from "axios";

// Thunks
const getAlbumDetailAsyncThunk = createAsyncThunk<
    ServerResponse<AlbumDetail>,
    { id: string | undefined },
    { rejectValue: string }
>('albumDetailCollection/getAlbumDetail', async (model, thunkApi) => {
    const response = await axiosApiInstance.get<ServerResponse<AlbumDetail>>(portalServer + `/api/album/${model.id}`);
    return response.data;
});

const getAlbumExtraInfoAsyncThunk = createAsyncThunk<
    ServerResponse<AlbumExtraInfo>,
    { id: string | undefined },
    { rejectValue: string }
>('albumDetailCollection/getAlbumExtraInfo', async (model, thunkApi) => {
    const response = await axiosApiInstance.get<ServerResponse<AlbumExtraInfo>>(portalServer + `/api/album/${model.id}/extra-info`);
    return response.data;
});

const getCollectionPagingAsyncThunk = createAsyncThunk<
    ServerResponse<PagingResponse<CollectionPagingResponse>>,
    CollectionPagingRequest,
    { rejectValue: string }
>('albumDetailCollection/getCollectionPaging', async (model, thunkApi) => {
    const config: AxiosRequestConfig<CollectionPagingRequest> = {
        params: model
    };
    const response = await axiosApiInstance.get<ServerResponse<PagingResponse<CollectionPagingResponse>>>(portalServer + `/api/collection`, config);
    return response.data;
});

interface AlbumDetailCollectionState {
    albumDetail: AlbumDetail | null;
    albumExtraInfo: AlbumExtraInfo | null;
    collections: CollectionPagingResponse[];
    totalRecords: number;
    loading: boolean;
    error: string | null;
}

const initialState: AlbumDetailCollectionState = {
    albumDetail: null,
    albumExtraInfo: null,
    collections: [],
    totalRecords: 0,
    loading: false,
    error: null
};

export const albumDetailCollectionSlice = createSlice({
    name: "albumDetailCollection",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // getAlbumDetailAsyncThunk
        builder.addCase(getAlbumDetailAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getAlbumDetailAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.albumDetail = action.payload.data;
            }
        });

        builder.addCase(getAlbumDetailAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        });

        // getAlbumExtraInfoAsyncThunk
        builder.addCase(getAlbumExtraInfoAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getAlbumExtraInfoAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.albumExtraInfo = action.payload.data;
            }
        });

        builder.addCase(getAlbumExtraInfoAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        });

        // getCollectionPagingAsyncThunk
        builder.addCase(getCollectionPagingAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getCollectionPagingAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.collections = action.payload.data.data;
                state.totalRecords = action.payload.data.rowNum;
            }
        });

        builder.addCase(getCollectionPagingAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        });
    }
});

export { getAlbumDetailAsyncThunk, getAlbumExtraInfoAsyncThunk, getCollectionPagingAsyncThunk };

export default albumDetailCollectionSlice.reducer;