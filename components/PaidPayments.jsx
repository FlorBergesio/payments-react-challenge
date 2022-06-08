import { useEffect, useState } from "react";

export default function PaidPayments( {student_orders} ) {
  return (
    <>
      <div className="flex justify-between gap-4">
        <h2 className='font-bold'>Cuotas pendientes</h2>
        <span>V</span>
      </div>
      <div>
        {
          student_orders.map(order => (
            <div className="flex justify-between gap-4 my-2" key={order.id}>
              <div className="text-left">
                <h3 className="text-lg">{order.name}</h3>
                <span className="text-sm">Pagado el {`${new Date(order.payin.created).getDate()} de ${new Date(order.payin.created).toLocaleString('default', { month: 'short' })}.`}</span>
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