'use client';

import { useCart } from "@/hooks/useCart";
import Heading from "../components/Heading";
import { formatPrice } from "@/utils/formatPrice";
import OrderItem from "./OrderItem";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const OrderForm = () => {

    const {cartProducts, cartTotalAmount} = useCart();

    if(!cartProducts || cartProducts.length === 0){
        return(
            <div className="flex flex-col items-center">
                <div className="text-2xl">Tu carrito está vacío</div>
                <div>
                    <Link href ={"/"} className="
                    text-slate-500 flex items-center gap-1 mt-2
                    "
                    >
                        <MdArrowBack />
                    <span>Inicia tu Compra</span>
                    </Link>
                </div>
            </div>
        )
    }

    return ( <div>
        <div>
            <Heading title="Recibo de Compra" center/>
            <div className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        mt-4
        ">
            N° de Recibo: 00000000001
            </div>
            <div className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        mt-8
        ">
            <div className="col-span-2 justify-self-start">PRODUCTO</div>
            <div className="justify-self-center">PRECIO</div>
            <div className="justify-self-center">CANTIDAD</div>
            <div className="justify-self-end">TOTAL</div>
        </div>
        </div>
        <div>
        {cartProducts && cartProducts.map((item) => {
                return <OrderItem key={item.id} item={item} />;
            })}
        </div>
        <hr />
        <div className="text-sm flex flex-col gap-1 items-start">
            <div className="flex justify-between w-full text-base font-semibold mt-4 text-right">
                <span >Subtotal</span>
                <span>{formatPrice(cartTotalAmount)}</span>
            </div>
                <Link href ={"/"} className="
                    text-slate-500 flex items-center gap-1 mt-2
                    "
                    >
                        <MdArrowBack />
                    <span>Continúa Comprando</span>
                    </Link>
        </div>
    </div> );
}
 
export default OrderForm;