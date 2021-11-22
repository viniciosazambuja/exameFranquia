import styles from '../styles/Formulario.module.scss'
import { useState } from 'react'

export default function Formulário(props) {

    const [dataForm, setDataForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        celular: "",
        cidade: "",
        estado: "",
        profissao: "",
        investimento: ""    
    })

    const handleInput = event => {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    return(
        <section className={styles.section}>
            <h2 className={styles.titulo}>VEJA NOSSOS VIDEOS</h2>
            <h3 className={styles.subTitulo}>
                VEJA OS VIDEOS ABAIXO PARA CONHECER O <br />
                PRIMEIRO MODELO DE FRANQUIAS FOCADA EM EXAMES</h3>
            <form action="" className={styles.formulario}>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Nome</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Sobrenome</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">E-mail</label>
                    <input className={styles.input} type="email" />
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Celular</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Cidade</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Estado</label>
                    <input className={styles.input} type="text" />
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Profissão</label>
                    <select className={styles.select} name="" id="">
                        <option value="">Farmacêutico</option>
                        <option value="">Biólogo</option>
                        <option value="">Médico</option>
                        <option value="">Investidor</option>
                        <option value="">Outro</option>
                    </select>
                </div>
                <div className={styles.areaInput}>
                    <label className={styles.label} htmlFor="">Investimento disponível:</label>
                    <select className={styles.select} name="" id="">
                        <option value="">R$225.000,00</option>
                        <option value="">R$250.000,00</option>
                        <option value="">Não tenho um valor planejado</option>
                    </select>
                </div>
                <button className={styles.button}>Agora é a hora</button>
            </form>
        </section>
    )
}