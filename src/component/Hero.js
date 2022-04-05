import { useContext } from 'react'
import CalenderContext from '../context/CalenderContext'
const Hero = () => {
  const { SignedIn } = useContext(CalenderContext)
  const name = localStorage.getItem('Name')
  const image = localStorage.getItem('img')

  if (SignedIn) {
    return (
      <div className='hero h-60 bg-base-200 w-100 mx-auto'>
        <div className='hero-content flex-col lg:flex-row text-center'>
          <img
            src={image}
            className='min-w-lg rounded-full shadow-2xl'
            alt='profile'
            loading='lazy'
          />
          <div>
            <h1 className='text-5xl font-bold'>Signed In as: {name}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
