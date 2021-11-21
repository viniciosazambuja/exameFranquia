import { useState } from 'react'
import styles from '../styles/Carrossel.module.scss'

export default function Carrossel(props) {

    const [carroselAtual, setCarroselAtual] = useState(0);
    
    return(
        <section className={styles.section}>
            <div onClick={() => setCarroselAtual(carroselAtual -= 1)} className={styles.controller}>left</div>
            <div onClick={() => setCarroselAtual(carroselAtual += 1)} className={styles.controller}>right</div>
            <div className={styles.areaImages}>
                <div style={{transform: `translate(-${carroselAtual*100}vw)`}} className={styles.areaImage}>image 1</div>
                <div style={{transform: `translate(-${carroselAtual*100}vw)`}} className={styles.areaImage}>image 2</div>
                <div style={{transform: `translate(-${carroselAtual*100}vw)`}} className={styles.areaImage}>image 3</div>
            </div>
        </section>
    )
}