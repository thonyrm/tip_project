import type {Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types/idex"
import type { OrderActions } from "../Reducer/Order-reducer"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}
export default function MenuItem({item, dispatch} : MenuItemProps) {
    return (
        <button className="border-2 border-sky-700 rounded-lg p-3 text-lg cursor-pointer w-full hover:bg-sky-200 flex justify-between"
            onClick={() => dispatch({type: 'add-item', payload:{item}}) }
        >
            <p>{item.name}</p>
            <p className="font-black">{formatCurrency(item.price)}</p>
        </button>
    )
}
