import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import Card from '../components/Card';
import DuePayments from '../components/DuePayments';
import FutureDues from '../components/FutureDues';
import PaidPayments from '../components/PaidPayments';
import StudentInfo from '../components/StudentInfo';

export async function getStaticProps(context) {
  const response_student_info = await fetch('http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/', {
    headers: {
      'hash': 'OcJn4jYChW'
    }
  });
  const student_info = await response_student_info.json();

  const response_student_orders = await fetch('http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/', {
    headers: {
      'hash': 'OcJn4jYChW'
    }
  });
  const student_orders = await response_student_orders.json();

  return {
    props: { 
      student_info,
      student_orders
    }
  };
}

export default function Home(props) {
  const [total, setTotal] = useState(0)

  const checkDueDate = (date) => {
    const formattedDate = new Date(date)
    const today = new Date();
    return formattedDate < today
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(props, total)}

      <nav className='w-full bg-white drop-shadow-lg p-4 flex items-center justify-center gap-4 mb-2'>
        <Image
          src={props.student_info.school.logo}
          width={64}
          height={64}
        />
        <h1 className='text-lg font-bold'>
          {props.student_info.school.name}
        </h1>
      </nav>

      <main className='p-4'>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <Card>
            <StudentInfo student_info={props.student_info} total={total} />
          </Card>

          <Card>
            <PaidPayments />
          </Card>

          <Card>
            <DuePayments student_orders={props.student_orders} checkDueDate={checkDueDate} />
          </Card>

          <Card>
            <FutureDues />
          </Card>

        </div>

      </main>

    </div>
  )
}
