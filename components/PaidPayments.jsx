import { useState } from "react";
import months from '../utils/getMonthName'

export default function PaidPayments( {student_orders} ) {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <div className="flex justify-between gap-4">
        <h2 className='font-bold'>Cuotas pagadas</h2>
        <span onClick={() => setDisplay(current => !current)}>V</span>
      </div>
      <div className={`${!!display ? 'block' : 'hidden'}`}>
        {
          student_orders.map(order => (
            <div className="flex justify-between gap-4 my-2" key={order.id}>
              <div className="text-left">
                <h3 className="text-lg">{order.name}</h3>
                <span className="text-sm">Pagado el {`${new Date(order.payin.created).getDate()} de ${months[new Date(order.payin.created).getMonth()].shortNameSpa}.`}</span>
              </div>
              <div className="text-right">
                →
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}