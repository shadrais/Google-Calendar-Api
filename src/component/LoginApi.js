import { useEffect, useContext } from 'react'
import { gapi } from 'gapi-script'
import CalenderContext from '../context/CalenderContext'

const LoginApi = () => {
  const { setSignedIn } = useContext(CalenderContext)

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  var SCOPES = 'https://www.googleapis.com/auth/calendar.readonly'
  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ]

  const credentials = {
    apiKey: API_KEY,
    client_id: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES,
  }

  useEffect(() => {
    const initClient = () => {
      gapi.client.init(credentials).then(
        () => {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)
          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
        },
        function (error) {
          console.log(error)
        }
      )
    }
    gapi.load('client:auth2', initClient)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  function updateSigninStatus(isSignedIn) {
    setSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get())
  }

  return <></>
}

export default LoginApi
