import { GoogleLogin } from 'react-google-login'
const client_id =
  '126665153213-99nijeruc6cob5hof12kg07acd9dn8pj.apps.googleusercontent.com'

function Login() {
  const onSuccess = (res) => {
    const profile = res.profileObj
    // console.log('LOGIN SUCCESS! Current user: ', res.profileObj)
    localStorage.setItem('Name', profile.name)
    localStorage.setItem('img', profile.imageUrl)
  }
  const onFailure = (res) => {
    console.log('LOGIN FAILED!, res:', res)
  }

  return (
    <div id='signInButton '>
      <GoogleLogin
        className='btn w-36 rounded'
        client_id={client_id}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        theme='dark'
        cookiePolicy={'single_host_origin'}
        issignedIn={true}
      />
    </div>
  )
}

export default Login
