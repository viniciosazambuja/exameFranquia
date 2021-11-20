import styles from '../styles/Valores.module.scss'

export default function Valores(props) {
    return(
        <section className={styles.section}>
            <div className={styles.cardsArea}>
                <div className={styles.card}>
                    <h2 className={styles.titulo}>Faturamento</h2>
                    <h3 className={styles.valor}>157</h3>
                    <h4 className={styles.unidade}>mil/mês*</h4>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.titulo}>Faturamento</h2>
                    <h3 className={styles.valor}>157</h3>
                    <h4 className={styles.unidade}>mil/mês*</h4>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.titulo}>Faturamento</h2>
                    <h3 className={styles.valor}>157</h3>
                    <h4 className={styles.unidade}>mil/mês*</h4>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.titulo}>Faturamento</h2>
                    <h3 className={styles.valor}>157</h3>
                    <h4 className={styles.unidade}>mil/mês*</h4>
                </div>
            </div>
            <span className={styles.span}>Os valores são estimados e podem variar de acordo com a operação*</span>
        </section>
    )
}