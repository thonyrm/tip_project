import type { Dispatch } from "react"
import type { OrderItem } from "../types/idex"
import type { OrderActions } from "../Reducer/Order-reducer"
import { formatCurrency } from "../helpers"

type OrderContentProp = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}
export default function OrderContent({order , dispatch}: OrderContentProp) {
    return (
        <div>
            <h2 className="font-black text-4xl ">Consumo</h2>
            <div className="space-y-3 mt-10">
                {
                    order.map(item => (
                        <div
                            key={item.id}
                            className="flex justify-between  items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad : {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                            <button
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={()=> dispatch({type:'remove-item' , payload:{id:item.id}})}
                            >
                                X
                            </button>


                        </div>

                    ))
                }

            </div>
        
        </div>
    )
}
