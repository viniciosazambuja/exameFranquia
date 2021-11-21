import styles from '../styles/Videos.module.scss'

export default function Videos(props) {
    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}>VEJA NOSSOS VIDEOS</h2>
            <h3 className={styles.subTitulo}>
                VEJA OS VIDEOS ABAIXO PARA CONHECER O <br />
                PRIMEIRO MODELO DE FRANQUIAS FOCADA EM EXAMES</h3>
            <div className={styles.areaVideos}>
                <div className={styles.video}></div>
                <div className={styles.video}></div>
            </div>
        </section>
    )
}