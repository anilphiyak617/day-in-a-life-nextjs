import React from 'react'
import NavLink from './NavLinks'
import { Button } from '@/components/ui/button'

function SideNavBar() {
  return (
    <div className='h-full w-full flex flex-col pt-8 font-medium  '>
      {/* header */}
      <div className='h-20 text-3xl font-bold flex items-center justify-center'>LOGO title</div>
      {/* links */}
      <div className='h-44 flex flex-col  ml-6 justify-around '>
        {/* <NavLink href={'/'} name='Home' key={1} /> */}
        <NavLink href={'/dashboard'} name='Dashboard' key={1} />
        <NavLink href={ '/dashboard/invoices'} name='Invoices' key={1} />
        <NavLink href={'/dashboard/customers'} name='Customers' key={1} />
      </div>
      {/* footer */}
      <div className='h-20 flex  flex-col items-center justify-end flex-1 p-8'>
      <Button variant={'outline'} >update to pro</Button>
      </div>
    </div>
  )
}

export default SideNavBar