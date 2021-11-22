import styles from '../styles/Planos.module.scss'

export default function Planos(props) {
    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}>VEJA NOSSOS PLANOS</h2>

            <div className={styles.areaTable}>
            <table className={styles.table}>
                <thead>
                <tr className={styles.linha}>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                    <tr className={styles.linha}>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr className={styles.linha}>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
            </table>
                <div className={styles.botoes}>
                    <button className={styles.button}>quero este!</button>
                    <button className={styles.button}>quero este!</button>
                </div>
            </div>
        </section>
    )
}