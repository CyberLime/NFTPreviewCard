import './App.css'
import Image from './components/Image'
import NameDesc from './components/NameDesc'
import PriceDate from './components/PriceDate'
import Author from './components/Author'

function App() {

  return (
    <>
      <div className='card'>
        <Image />
        <NameDesc />
        <PriceDate />
        <Author /> 
      </div>
    </>
  )
}

export default App