import { useEffect, useState } from "react";
import CheckboxItem from "./CheckboxItem";

export default function FutureDues( {student_orders, checkDueDate, setTotal} ) {
  const [selectedOrders, setSelectedOrders] = useState({selected: []})

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
      <div className="flex justify-between gap-4">
        <h2 className='font-bold'>Cuotas pendientes</h2>
        <span>V</span>
      </div>
      <div>
        {
          student_orders.map(order => (
            <CheckboxItem key={order.id} id={order.id} checked={selectedOrders.selected.includes(order.id)} handleCheckbox={() => handleCheckbox(order.id)} >
              <div className="flex justify-between gap-4">
                <div className="text-left">
                  <h3 className="text-lg">{order.name}</h3>
                  <p className="text-sm">{`${checkDueDate(order.due) ? 'Vencido el ' : 'Vence el '} ${new Date(order.due).getDate()} de ${new Date(order.due).toLocaleString('default', { month: 'short' })}.`}</p>
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