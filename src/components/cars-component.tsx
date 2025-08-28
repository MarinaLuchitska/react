import type {ICar} from "../models/ICar.ts";
import {useEffect, useState} from "react";
import {getCars} from "../services/api.service.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then(setCars);
    }, []);

    return (
        <div>
            {cars.map(car => (
                <div key={car.id}>
                    <h3>{car.brand}</h3>
                    <p>year {car.year}</p>
                    <p>price {car.price}</p>
                </div>
            ))}
        </div>
    );
};