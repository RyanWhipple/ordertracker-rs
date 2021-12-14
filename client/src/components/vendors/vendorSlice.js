import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vendors: []
}

export const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        setVendors: (state, action) => {
            state.vendors = action.payload
        },
        deleteVendor: (state, action) => {
            state.vendors = state.vendors.filter((vendor) => vendor.id !== action.payload)
        },
        addVendor: (state, action) => {
            state.vendors = [...state.vendors, action.payload]
        }

    }
})

export const { setVendors, deleteVendor, addVendor } = vendorSlice.actions

export const selectVendors = (state) => state.vendor.vendors;

export default vendorSlice.reducer
