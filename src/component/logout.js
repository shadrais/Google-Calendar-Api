import { useContext } from 'react'
import { GoogleLogout } from 'react-google-login'
import CalenderContext from '../context/CalenderContext'

const client_id = process.env.REACT_APP_CLIENT_ID

const onSuccess = () => {
  console.log('Log Out successful')
}

function Logout() {
  const { setClicked } = useContext(CalenderContext)

  return (
    <div
      id='signoutButton'
      onClick={() => {
        setClicked(false)
        localStorage.clear()
      }}>
      <GoogleLogout
        className='btn w-36 rounded'
        theme='dark'
        client_id={client_id}
        buttonText={'Logout'}
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout
