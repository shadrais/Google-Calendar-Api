import { useContext } from 'react'
import { gapi } from 'gapi-script'
import CalenderContext from '../context/CalenderContext'

const FetchCal = ({ getEvent }) => {
  const { setData, setClicked } = useContext(CalenderContext)

  const listUpcomingEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      })
      .then((response) => {
        setData(response.result.items)
      })
  }

  const onClick = () => {
    listUpcomingEvents()
    setClicked(true)
  }

  return (
    <div className=''>
      <button className='btn' onClick={onClick}>
        Fetch calendar
      </button>
    </div>
  )
}

export default FetchCal
