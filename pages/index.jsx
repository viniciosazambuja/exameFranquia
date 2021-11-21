import Header from '../components/Header'
import Inicio from '../components/Inicio'
import Valores from '../components/Valores'
import Sobre from '../components/Sobre'
import Diferenciais from '../components/Diferenciais'
import Planos from '../components/Planos'
import Carrossel from '../components/Carrossel'
import Videos from '../components/Videos'
import Formulario from '../components/Formulario'
import Footer from '../components/Footer'

export default function Home() {
  return (
      <main>
        <Header />
        <Inicio />
        <Valores />
        <Sobre />
        <Diferenciais />
        <Diferenciais />
        <Planos></Planos>
        <Carrossel></Carrossel>
        <Videos></Videos>
        <Formulario></Formulario>
        <Footer></Footer>
      </main>
    )
}
