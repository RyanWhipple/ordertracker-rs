import React from 'react'

// Components
import { PageHeader } from '../PageHeader'
import { PurchaseOrderForm } from './PurchaseOrderForm'
import { PurchaseOrderList } from './PurchaseOrderList'

export const PurchaseOrderContainer = () => {
    return (
        <>
            <PageHeader />
            <PurchaseOrderForm />
            <PurchaseOrderList />
        </>
    )
}
