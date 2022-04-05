import { useContext } from 'react'
import CalenderContext from '../context/CalenderContext'
import Card from './Card'

const CalendarItem = ({ item }) => {
  const { data, clicked } = useContext(CalenderContext)
  if (clicked && data) {
    return (
      <>
        <h2 className='text-5xl font-bold '>Events</h2>
        <ul>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </>
    )
  }
}

export default CalendarItem
