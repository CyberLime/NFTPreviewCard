import styles from '../modules/Author.module.css'
import avatar from '../assets/images/image-avatar.png'

function Author() {
  return (
    <div className={styles.author}>
      <img className={styles.avatar} src={avatar} />
      <p style={{color: 'hsl(215, 51%, 70%)'}}>Creation of <a className={styles.link}>Jules Wyvern</a></p>
    </div>
  )
}

export default Author