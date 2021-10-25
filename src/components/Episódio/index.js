import react from 'react'
import Capa from '../../assets/capa-filme.png'

const Episodio = () => {
   return (
      <li>
         <div class="row">
            <div class="col-1 my-auto text-center">
               <h3 class="text-white">1</h3>
            </div>
            <div class="col-4">
               <img class="img-fluid" src={Capa} />
            </div>
            <div class="col-7">
               <h6 class="text-white">Nome do episódio</h6>
               <p class="text-muted">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
               </p>
            </div>
         </div>
      </li>
   )
}

export default Episodio
