import react from 'react'
import Diabo from '../../assets/diabo-de-cada-dia.png'
import Episodios from '../Episódio'

const ModalFilme = () => {
   return (
      <div class="modal fade" id="modal-filme">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-hero">
                  <img src={Diabo} />
                  <div class="col-12 modal-hero-infos">
                     <button class="btn btn-lg btn-custom-white">
                        <span class="mdi mdi-play"></span> Assistir
                     </button>
                     <a
                        href="#"
                        class="btn-custom-round btn btn-lg btn-light rounded-circle"
                     >
                        <span class="mdi mdi-play"></span>
                     </a>
                     <a
                        href="#"
                        class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                     >
                        <span class="mdi mdi-thumb-up text-white"></span>
                     </a>
                     <a
                        href="#"
                        class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
                     >
                        <span class="mdi mdi-thumb-down text-white"></span>
                     </a>
                  </div>
               </div>
               <div class="modal-infos">
                  <div class="container">
                     <div class="row">
                        <div class="col-7">
                           <p class="filme_descricao">
                              Pregadores Profanos. Autoridades Corruptas.
                              Amantes Assassinos. Numa cidade cheia de
                              pecadores, um jovem busca justiça.
                           </p>
                        </div>
                        <div class="col-5">
                           <p class="filme_elenco">
                              Elenco:
                              <text>
                                 Silvio Sampaio, Juliana Righi, Omar Sampaio,
                                 Mikael Lopes.
                              </text>
                              <br />
                              <br />
                              Gêneros: <text>Ação, Aventura, Dramático. </text>
                              <br />
                              <br />
                              Cenas e momentos: <text>Violentos.</text>
                           </p>
                        </div>
                     </div>
                     <br />
                     <div class="row">
                        <div class="col-7">
                           <h3 class="text-white">Episódios</h3>
                        </div>
                        <div class="col-5 text-right">
                           <select class="form-control">
                              <option>Temporada 1</option>
                           </select>
                        </div>
                     </div>
                     <br />
                     <div class="row">
                        <ul id="lista_episodeos">
                           <Episodios />
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ModalFilme
