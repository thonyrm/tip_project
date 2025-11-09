import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import { menuItems } from "./data/db"
import { initialState, OrderReducer } from "./Reducer/Order-reducer"
import TipPercentageForm from "./components/TipPercentageForm"
import OrderTotals from "./components/OrderTotals"

function App() {
  const [state, dispatch] = useReducer(OrderReducer, initialState)
  return (
    <>
      <header className="bg-sky-800 py-5 font-sans ">
        <h1 className="text-center text-4xl text-white font-bold">Calculadora de propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid  md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-bold text-4xl">
            Menú
          </h2>
          <div className="space-y-3 mt-10 ">
            {
              menuItems.map(item =>(
                <MenuItem
                  key = {item.id}
                  item = {item}
                  dispatch = {dispatch}
                />
              ))
            }
          </div>
        </div>
        <div className=" border border-dashed border-slate-300 rounded-lg space-y-10 p-5">
          {
            state.order.length ?
            (
              <>
                <OrderContent
                  order={state.order}
                  dispatch = {dispatch}
                  />
                <TipPercentageForm
                  tip = {state.tip}
                  dispatch = {dispatch}
                />
                <OrderTotals
                  order= {state.order}
                  tip = {state.tip}
                  dispatch = {dispatch}
                />
              </>
            ): 
            <p className="text-center">La orden está vacia</p>
          }
        </div>
      </main>
    </>
  )
}

export default App
