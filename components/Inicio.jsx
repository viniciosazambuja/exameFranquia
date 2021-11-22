import styles from '../styles/Inicio.module.scss'
import Button from './Button'
import Img from '../public/images/img.png'
import Image from 'next/image'
export default function Inicio(props) {
  return(
    <section className={styles.section}>
      <div className={styles.areaContent}>
        <h1 className={styles.titulo}>Esse é o titulo principal da ossa landing page</h1>
        <Button actionButton="/">Seja um franquiado</Button>
      </div>
      <div className={styles.areaImage}>
        <Image src={Img} layout="fill" objectFit="contain"/>
      </div>
    </section>
  )
}