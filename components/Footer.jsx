import styles from '../styles/Footer.module.scss'

export default function Footer(props) {
    return(
        <footer className={styles.footer}>
            <div className={styles.subFooter}>
                <div className={styles.areaInfo}>
                    <h4 className={styles.titulo}>Telefone</h4>
                    <p className={styles.p}>
                    Alameda rio negro, 500, 3° andar <br />
                    Blumenau / MT,. <br />
                    CEP 06454-000
                    </p>
                </div>
                <div className={styles.areaInfo}>
                    <h4 className={styles.titulo}>Telefone</h4>
                    <p className={styles.p}>
                    Alameda rio negro, 500, 3° andar <br />
                    Blumenau / MT,. <br />
                    CEP 06454-000
                    </p>
                </div>
                <div className={styles.redesSociais}>
                    <div className={styles.rede}>
                        <div className={styles.icon}>
                            X
                        </div>
                        <h4 className={styles.nomeRede}>nome da rede</h4>
                    </div>
                    <div className={styles.rede}>
                        <div className={styles.icon}>
                            X
                        </div>
                        <h4 className={styles.nomeRede}>nome da rede</h4>
                    </div>
                    <div className={styles.rede}>
                        <div className={styles.icon}>
                            X
                        </div>
                        <h4 className={styles.nomeRede}>nome da rede</h4>
                    </div>
                    <div className={styles.rede}>
                        <div className={styles.icon}>
                            X
                        </div>
                        <h4 className={styles.nomeRede}>nome da rede</h4>
                    </div>
                </div>
            </div>
            <div className={styles.realFooter}>
                <span className={styles.span}>esse é o primeiro texto</span>
                <span className={styles.span}>esse é o segundo texto</span>
            </div>
        </footer>
    )
}