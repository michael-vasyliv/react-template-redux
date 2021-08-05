import { UserModel } from '@models/user';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const getCurrentUserAsync = createAsyncThunk(
    'movie/getCurrentUserAsync',
    async (): Promise<UserModel[]> => {
        const response = await fetch('/user.json');
        return response.json();
    }
);

const adapter = createEntityAdapter<UserModel>();
const initialState = adapter.getInitialState();

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCurrentUserAsync.fulfilled, adapter.upsertMany);
    }
});

export default userSlice.reducer;
