import { useContext } from 'react'
import CalenderContext from '../context/CalenderContext'
import FetchCal from './fetchCal'
import Login from './login'
import Logout from './logout'

const Navbar = () => {
  const { SignedIn } = useContext(CalenderContext)

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a href='/' className='btn btn-ghost normal-case text-3xl font-bold'>
          Calendar
        </a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>{SignedIn ? <Logout /> : <Login />}</li>
          <li>{SignedIn && <FetchCal />}</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
