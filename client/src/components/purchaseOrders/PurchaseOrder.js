import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePurchaseOrder } from './purchaseOrderSlice'
import { selectVendors } from '../vendors/vendorSlice'

export const PurchaseOrder = ({ purchaseOrder }) => {
    const dispatch = useDispatch()
    const vendor = useSelector(selectVendors)
        .filter(vendor => vendor.id === purchaseOrder.vendorId)[0]

    return (
        <li>
            <p><b>PO #: </b>{purchaseOrder.number}</p>
            <p><b>Vendor: </b>{vendor && vendor.name}</p>
            <button
                className="delete-btn"
                onClick={() => dispatch(deletePurchaseOrder(purchaseOrder.id))}
            >
                x
            </button>
        </li>
    )
}
