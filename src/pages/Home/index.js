import react from 'react'
import ModalFilme from '../../components/ModalFilme'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Home = () => {
   return (
      <>
         <ModalFilme />

         <div class="container-fluid">
            <Header />
         </div>

         <Hero />

         <div id="main-content">
            <Section />
         </div>
      </>
   )
}

export default Home
