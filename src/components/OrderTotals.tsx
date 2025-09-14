import { useMemo, type Dispatch } from "react"
import type { OrderItem } from "../types/idex"
import type { OrderActions } from "../Reducer/Order-reducer"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order : OrderItem[]
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price),0) , [order])
    const tipAmount = useMemo(() => subTotalAmount * tip , [order, tip])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])
    return (
        <>
            <div className="space-y-3 ">
                <h2 className="font-black text-2xl ">Totales y propinas: </h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold "> {formatCurrency(subTotalAmount)}</span>
                </p>
                <p>
                    Propina : {''}
                    <span className="font-bold" >{formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total a pagar : {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className="w-full bg-sky-800 text-white p-3 font-bold mt-10 hover:bg-sky-700 cursor-pointer disabled:opacity-10"
                disabled = {totalAmount === 0}
                onClick = {() => dispatch({type: 'place-order'})}
            >
                Guardar Orden 
            </button>
        
        </>
    )
}
