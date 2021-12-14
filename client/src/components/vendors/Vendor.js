import React from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { deleteVendor } from './vendorSlice'

export const Vendor = ({ vendor }) => {
    const dispatch = useDispatch()

    const deleteVendorClicked = () => {
        Axios.delete(`http://localhost:3001/api/vendor/delete/${vendor.id}`)
        dispatch(deleteVendor(vendor.id))
    }


    return (
        <li>
            {vendor.name}
            <button
                className="delete-btn"
                onClick={deleteVendorClicked}
            >
                x
            </button>
        </li>
    )
}
