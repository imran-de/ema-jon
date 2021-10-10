import React from 'react';
import './Shipping.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    const { user } = useAuth();
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />


                <input defaultValue={user?.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="address" defaultValue="" {...register("Address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;