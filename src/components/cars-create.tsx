
import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICar.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carsValidator} from "../validator/carsValidator.tsx";
import {postCars} from "../services/api.service.tsx";

export const CarsCreateComponent =()=>{
    const {register,handleSubmit, formState:{errors}}
        = useForm<ICar>({mode:'all',resolver:joiResolver(carsValidator)})

    const createHandler =(data:ICar)=>{
        postCars(data);
    }
    return(
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <label>
                    <input type='text'{...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </label>
                <label>
                    <input type='number'{...register('price')}/>
                    <div>{errors.price?.message}</div>
                </label>
                <label>
                    <input type='number'{...register('year')}/>
                    <div>{errors.year?.message}</div>
                </label>
                <button>add</button>

            </form>

        </>
    )


}





















