import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AlbumPagingResponse from "../../models/album/AlbumPagingResponse";
import AlbumPagingRequest from "../../models/album/AlbumPagingRequest";
import { portalServer } from "../../services/baseUrls";
import api from "../../services/interceptor";
import { AxiosRequestConfig } from "axios";
import { PagingResponse } from "../../models/common/PagingResponse";
import ServerResponse from "../../models/common/ServerResponse";
import ContentType from "../../models/content-type/ContentType";
import AlbumAlertMessage from "../../models/album-alert-mesage/AlbumAlertMessage";

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

const getAllContentTypesAsyncThunk = createAsyncThunk<
    ServerResponse<ContentType[]>,
    void,
    { rejectValue: string }
>('album/getAllContentTypes', async (_, thunkApi) => {
    const response = await api.get<ServerResponse<ContentType[]>>(portalServer + `/api/contenttype/all`);
    return response.data;
});

const getAlbumAlertMessagesAsyncThunk = createAsyncThunk<
    ServerResponse<AlbumAlertMessage[]>,
    void,
    { rejectValue: string }
>('album/getAlbumAlertMessages', async (_, thunkApi) => {
    const response = await api.get<ServerResponse<AlbumAlertMessage[]>>(portalServer + `/api/albumalertmessage/all`);
    return response.data;
});

interface AlbumState {
    totalRecords: number;
    albums: AlbumPagingResponse[];
    contentTypes: ContentType[];
    albumAlertMessages: AlbumAlertMessage[];
    loading: boolean;
    error: string | null;
}

const initialState: AlbumState = {
    totalRecords: 0,
    albums: [],
    contentTypes: [],
    albumAlertMessages: [],
    loading: false,
    error: null
};


export const albumSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // getAlbumsPagingAsyncThunk
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

        // getAllContentTypesAsyncThunk
        builder.addCase(getAllContentTypesAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getAllContentTypesAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.contentTypes = action.payload.data;
            }
        });

        builder.addCase(getAllContentTypesAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        })

        // getAlbumAlertMessagesAsyncThunk
        builder.addCase(getAlbumAlertMessagesAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getAlbumAlertMessagesAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.albumAlertMessages = action.payload.data;
            }
        });

        builder.addCase(getAlbumAlertMessagesAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        });
    }
});

export { 
    getAlbumsPagingAsyncThunk,
    getAllContentTypesAsyncThunk,
    getAlbumAlertMessagesAsyncThunk
};
export default albumSlice.reducer;