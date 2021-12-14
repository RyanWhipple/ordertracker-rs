import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchaseOrders: [
        { id: 1, number: 60000001, vendorId: 1 },
        { id: 2, number: 60000002, vendorId: 2 },
        { id: 3, number: 60000003, vendorId: 3 },
        { id: 4, number: 60000004, vendorId: 4 },
    ]
}

export const purchaseOrderSlice = createSlice({
    name: 'purchaseOrder',
    initialState,
    reducers: {
        deletePurchaseOrder: (state, action) => {
            state.purchaseOrders = state.purchaseOrders.filter((purchaseOrder) => purchaseOrder.id !== action.payload)
        },
        addPurchaseOrder: (state, action) => {
            state.purchaseOrders = [...state.purchaseOrders, action.payload]
        }

    }
})

export const { deletePurchaseOrder, addPurchaseOrder } = purchaseOrderSlice.actions

export const selectPurchaseOrders = (state) => state.purchaseOrder.purchaseOrders;

export default purchaseOrderSlice.reducer

