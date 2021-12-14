import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

// Purchase Order State
import { addPurchaseOrder } from "./purchaseOrderSlice";

// Vendor State for dropdown box
import { selectVendors } from '../vendors/vendorSlice'


export const PurchaseOrderForm = () => {
    const dispatch = useDispatch()

    const vendors = useSelector(selectVendors)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const newPurchaseOrder = {
            id: Math.floor(Math.random() * 100000),
            number: Number(data.purchaseOrderNumber),
            vendorId: Number(data.vendorId)
        }
        dispatch(addPurchaseOrder(newPurchaseOrder))
    }

    return (

        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Purchase Order Number:</label>
                    <input {...register("purchaseOrderNumber", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div>
                    <label>Vendor:</label>
                    <select {...register("vendorId", { required: true })}>
                        {vendors.map((vendor) => (
                            <option key={vendor.id} value={vendor.id}>{vendor.name}</option>
                        ))}

                    </select>
                </div>
                <input type="submit" />
            </form>
        </>


    );
}