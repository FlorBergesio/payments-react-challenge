import { useEffect, useState } from "react";
import CheckboxItem from "./CheckboxItem";
import months from '../utils/getMonthName'

export default function DuePayments( {student_orders, checkDueDate, setTotal, resetLists, setResetLists} ) {
  const [selectedOrders, setSelectedOrders] = useState({selected: []})
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    let total = 0
    student_orders.map(order => {
      if (selectedOrders.selected.includes(order.id)) {
        total += parseFloat(order.price)
        if (checkDueDate(order.due)) {
          total += parseFloat(order.interest)
        }
      }
    })
    setTotal(total)
  }, [selectedOrders])

  useEffect(() => {
    if (!!resetLists) {
      setSelectedOrders({selected: []})
      setResetLists(false)
    }
  }, [resetLists])

  const handleCheckbox = (id) => {
    let selected_array = selectedOrders.selected

    if (!selectedOrders.selected.includes(id)) {
      selected_array.push(id)
    } else {
      let find = selected_array.indexOf(id)
      selected_array.splice(find, 1)
    }
  
    setSelectedOrders({
      selected: selected_array,
    })
  }

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className='font-bold'>Cuotas pendientes</h2>
          <span className={`${(selectedOrders.selected.length == 0) ? 'block' : 'hidden'} text-gray-600 text-sm`}>Puedes seleccionar más de uno</span>
        </div>
        <span onClick={() => setDisplay(current => !current)}>V</span>
      </div>
      <div className={`${!!display ? 'block' : 'hidden'}`}>
        {
          student_orders.map(order => (
            <CheckboxItem key={order.id} id={order.id} checked={selectedOrders.selected.includes(order.id)} handleCheckbox={() => handleCheckbox(order.id)} >
              <div className="flex justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-lg">{order.name}</h3>
                  <p className="text-sm">{`${checkDueDate(order.due) ? 'Vencido el ' : 'Vence el '} ${new Date(order.due).getDate()} de ${months[new Date(order.due).getMonth()].shortNameSpa}.`}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg">$ {order.price}</p>
                  {checkDueDate(order.due) && <span className="text-sm">Interés: $ {order.interest}</span>}
                </div>
              </div>
            </CheckboxItem>
          ))
        }
      </div>
    </>
  );
}