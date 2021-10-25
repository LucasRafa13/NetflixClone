import react from 'react'
import Filme from '../Filme'

const Section = () => {
   return (
      <section>
         <div class="container">
            <div class="row">
               <div class="col-12">
                  <h5 class="text-white">Populares da Netflix</h5>
               </div>
            </div>
         </div>
         <div class="col-12">
            <ul class="filme_lista">
               <Filme />
            </ul>
         </div>
      </section>
   )
}

export default Section
