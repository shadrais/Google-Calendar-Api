import CalendarItem from './component/CalendarItem'
import Hero from './component/Hero'
import LoginApi from './component/LoginApi'
import Navbar from './component/Navbar'
import { CalendarProvider } from './context/CalenderContext'

const App = () => {
  return (
    <CalendarProvider>
      <LoginApi />
      <Navbar />
      <Hero />
      <div className='divider'></div>
      <div className='mx-auto w-full'>
        <CalendarItem />
      </div>
    </CalendarProvider>
  )
}

export default App
