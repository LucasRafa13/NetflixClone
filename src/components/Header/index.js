import react from 'react';
import Logo from '../../assets/logo.png';

const Header = ({ hideMenu }) => {
   return (
      <header class="row">
         <div class="col-2">
            <img src={Logo} />
         </div>
         {!hideMenu && (
            <div class="col-8">
               <ul class="menu_list">
                  <li>
                     <a href="#">Início</a>
                  </li>
                  <li>
                     <a href="#">Séries</a>
                  </li>
                  <li>
                     <a href="#">Filmes</a>
                  </li>
                  <li>
                     <a href="#">Mais Recentes</a>
                  </li>
                  <li>
                     <a href="#">Minha lista</a>
                  </li>
               </ul>
            </div>
         )}
      </header>
   );
};

export default Header;
