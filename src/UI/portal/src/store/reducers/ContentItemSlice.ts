import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ContentItemModel from "../../models/content-item/ContentItemModel";
import ServerResponse from "../../models/common/ServerResponse";
import axiosApiInstance from "../../services/interceptor";
import { portalServer } from "../../services/baseUrls";
import CollectionDetail from "../../models/content-item/CollectionDetail";

// Thunks
const getContentItemsAsyncThunk = createAsyncThunk<
    ServerResponse<ContentItemModel[]>,
    { id: number },
    { rejectValue: string }
>('contentItem/getContentItemsAsyncThunk', async (model, thunkApi) => {
    const response = await axiosApiInstance.get<ServerResponse<ContentItemModel[]>>(portalServer + `/api/collection/${model.id}/content-items`);
    return response.data;
});

const getCollectionByIdAsyncThunkn = createAsyncThunk<
    ServerResponse<CollectionDetail>,
    { id: number },
    { rejectValue: string }
>('contentItem/getCollectionByIdAsyncThunk', async (model, thunkApi) => {
    const response = await axiosApiInstance.get<ServerResponse<CollectionDetail>>(portalServer + `/api/collection/${model.id}`);
    return response.data;
})

interface ContentItemState {
    collection: CollectionDetail | null;
    contentItems: ContentItemModel[];
    loading: boolean;
    error: string | null;
}

const initialState: ContentItemState = {
    collection: null,
    contentItems: [],
    loading: false,
    error: null
};

export const contentItemSlice = createSlice({
    name: 'contentItem',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // getContentItemsAsyncThunk
        builder.addCase(getContentItemsAsyncThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getContentItemsAsyncThunk.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.contentItems = action.payload.data;
            }
        });

        builder.addCase(getContentItemsAsyncThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        })

        // getCollectionByIdAsyncThunk
        builder.addCase(getCollectionByIdAsyncThunkn.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getCollectionByIdAsyncThunkn.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload?.data) {
                state.collection = action.payload.data;
            }
        });

        builder.addCase(getCollectionByIdAsyncThunkn.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ?? null;
        });
    },
})

export { getContentItemsAsyncThunk, getCollectionByIdAsyncThunkn }

export default contentItemSlice.reducer;