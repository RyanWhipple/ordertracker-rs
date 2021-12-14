import React from 'react'

// Components
import { PageHeader } from '../PageHeader'
import { VendorForm } from './VendorForm'
import { VendorList } from './VendorList'

export const VendorContainer = () => {
    return (
        <>
            <PageHeader />
            <VendorForm />
            <VendorList />
        </>
    )
}
