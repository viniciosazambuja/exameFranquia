import styles from '../styles/Inicio.module.scss'
import Button from './Button'
import Img from '../public/images/img.png'
import Image from 'next/image'
export default function Inicio(props) {
  return(
    <section>
      <div className={styles.areaContent}>
        <h1>Esse é o titulo principal da ossa landing page</h1>
        <Button actionButton="">isso a</Button>
      </div>
      <div className={styles.areaImage}>
        <Image src={Img} />
      </div>
    </section>
  )
}