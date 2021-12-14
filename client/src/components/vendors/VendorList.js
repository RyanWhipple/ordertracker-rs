import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Vendor } from './Vendor'
import { selectVendors, setVendors } from './vendorSlice'
import Axios from 'axios'

export const VendorList = () => {

    const dispatch = useDispatch()

    // Load Vendors
    useEffect(() => {
        console.log("VendorList loading vendors!")
        Axios
            .get('http://localhost:3001/api/vendor/get')
            .then((response) => {
                console.log(response.data)
                dispatch(setVendors(response.data))
            })
    }, [])

    const vendors = useSelector(selectVendors);

    return (
        <>
            <h3>Vendors</h3>
            <ul className="list">
                {vendors ?
                    vendors.map((vendor) => (
                        <Vendor key={vendor.id} vendor={vendor} />
                    )) :
                    "No Vendors"
                }
            </ul>
        </>
    )
}
