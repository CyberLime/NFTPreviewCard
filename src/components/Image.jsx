import styles from '../modules/Image.module.css'
import view from '../assets/images/icon-view.svg'

function Image() {
  return (
    <>
      <div className={styles.image}>
        <div className={styles.view}>
          <img src={view} />
        </div>
      </div>
    </>
  )
}

export default Image