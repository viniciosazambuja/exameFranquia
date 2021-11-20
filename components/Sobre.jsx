import styles from '../styles/Sobre.module.scss'
import Button from './Button'

export default function Sobre(props) {
    return(
        <section className={styles.section}>
            <div className={styles.areaImagem}>

            </div>
            <div className={styles.areaContent}>
                <p className={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur distinctio est expedita? Voluptatibus, iusto? Cumque, molestiae voluptate explicabo perferendis sed harum enim eligendi illo, inventore rerum totam obcaecati fuga qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur distinctio est expedita? Voluptatibus, iusto? Cumque, molestiae voluptate explicabo perferendis sed harum enim eligendi illo, inventore rerum totam obcaecati fuga qui!</p>
                <Button actionButton="/">Seja um franquiado</Button>
            </div>
        </section>
    )
}