export default function PaymentButton( {total, applyPayment} ) {
  if (total > 0) {
    return (
      <div className="p-4 sticky bottom-0 flex items-center" >
        <span onClick={applyPayment} className='uppercase py-4 px-20 bg-gray-800 rounded-full text-white mx-auto'>Ir a pagar</span>
      </div>
    );
  }
  return false
}