import {useEffect, useState} from "react";
import {cartService} from "../../services/servsice.ts";
import type {ICart} from "../../models/ICartModel.ts";
import {useParams} from "react-router-dom";
import type {ICartResModel} from "../../models/ICartsResModel.ts";


export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        console.log("Запит на картки користувача:", id);
        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}: ICartResModel) => {
                    setCarts(carts);
                });
        }
    }, [id]);

    return  (
        <div>
            {carts.length === 0 ? (
                <div style={{ color: "gray" }}>
                    Немає карток для користувача ID: {id}
                </div>
            ) : (
                carts.map((cart: ICart) => (
                    <div key={cart.id}>
                        Сума: {cart.total}
                    </div>
                ))
            )}
        </div>
    );
};