import { useState } from "react";
import months from '../utils/getMonthName'

export default function PaidPayments( {student_orders} ) {
  const [display, setDisplay] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className='font-bold'>Cuotas pagadas</h2>
          <span className="text-gray-600 text-sm">Dale click para expandir</span>
        </div>
        <span onClick={() => setDisplay(current => !current)}><i className="text-gray-400 text-lg fas fa-chevron-down"></i></span>
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
                <i className="text-gray-400 text-lg fas fa-chevron-right"></i>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}