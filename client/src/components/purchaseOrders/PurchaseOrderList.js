import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { PurchaseOrder } from './PurchaseOrder'
import { selectPurchaseOrders } from './purchaseOrderSlice'
import { setVendors } from '../vendors/vendorSlice';
import Axios from 'axios'

export const PurchaseOrderList = () => {

    const dispatch = useDispatch()

    // Load Vendors
    useEffect(() => {
        Axios
            .get('http://localhost:3001/api/vendor/get')
            .then((response) => {
                dispatch(setVendors(response.data))
            })
    }, [])

    const purchaseOrders = useSelector(selectPurchaseOrders);

    return (
        <>
            <h3>Purchase Orders</h3>
            <ul className="list">
                {purchaseOrders ?
                    purchaseOrders.map((purchaseOrder) => (
                        <PurchaseOrder key={purchaseOrder.id} purchaseOrder={purchaseOrder} />
                    )) :
                    "No Transactions"
                }
            </ul>
        </>
    )
}
