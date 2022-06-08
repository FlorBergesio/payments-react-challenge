import Link from 'next/link'

export default function PaymentButton( {total} ) {
  if (total > 0) {
    return (
      <div className="p-4 sticky bottom-0 flex items-center" >
        <Link href='/payment'>
          <a className='uppercase py-4 px-20 bg-gray-800 rounded-full text-white mx-auto'>Ir a pagar</a>
        </Link>
      </div>
    );
  }
  return false
}