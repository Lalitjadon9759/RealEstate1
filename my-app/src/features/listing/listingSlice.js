import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import properties from "../../data/properties";

export const fetchListings = createAsyncThunk(
  "listing/fetchListings",
  async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(properties);
      }, 500);
    });
  }
);

const listingSlice = createSlice({
  name: "listing",
  initialState: {
    items: [],
    loading: false,
    error: null,
    saved: [], // ✅ store saved properties
  },
  reducers: {
    saveProperty: (state, action) => {
      const exists = state.saved.find((p) => p.id === action.payload.id);
      if (!exists) {
        state.saved.push(action.payload);
      }
    },
    removeSavedProperty: (state, action) => {
      state.saved = state.saved.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListings.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchListings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { saveProperty, removeSavedProperty } = listingSlice.actions;
export default listingSlice.reducer;
