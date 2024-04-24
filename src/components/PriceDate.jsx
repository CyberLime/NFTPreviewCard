import styles from '../modules/PriceDate.module.css'
import ethereum from '../assets/images/icon-ethereum.svg'
import clock from '../assets/images/icon-clock.svg'

function PriceDate() {
  return (
    <>
      <div className={styles.pricedate}>
        <div className={styles.ethereum}>
          <img src={ethereum} />
          <h2 style={{fontSize: 17, width: 85, color: 'hsl(178, 100%, 50%)'}}>0.041 ETH</h2>
        </div>
        <div className={styles.clock}>
          <img style={{height: 15}} src={clock} />
          <h3 style={{fontSize: 16, fontWeight: 400, color: 'hsl(215, 51%, 70%)', width: 80}}>3 days left</h3>
        </div>
      </div>
      <hr style={{width: '100%', border: 'none', height: 0.1, backgroundColor: 'hsla(215, 51%, 70%, 0.3)', marginTop: 15}} />
    </>
  )
}

export default PriceDate