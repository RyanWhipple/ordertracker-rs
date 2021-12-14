import { configureStore } from '@reduxjs/toolkit'
import vendorReducer from '../components/vendors/vendorSlice'
import purchaseOrderReducer from '../components/purchaseOrders/purchaseOrderSlice'

export const store = configureStore({
    reducer: {
        vendor: vendorReducer,
        purchaseOrder: purchaseOrderReducer,
    }
})