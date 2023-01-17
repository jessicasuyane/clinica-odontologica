import React from "react";

import EstruturaPagina from "../../Componentes/EstruturaPagina";
import ContatoMapa from "../../Componentes/Mapa";
import './estilo.css';

const Contato = () =>{
    return(
        
    <EstruturaPagina>
      <div className="container-contato">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Horários de  <b>atendimento</b></h2>

          <p>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>

          <ul className="lista-medicos">
            <li>
              <img className="img-aparelho" src="medico01.png" alt="Dr. Hélio" title="Dr. Hélio"/>
              <p>Dr. Hélio</p>
              <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
            </li>

            <li>
              <img className="img-aparelho" src="medico02.png" alt="Dr. Carlos" title="Dr. Carlos"/>
              <p>Dr. Carlos</p>
              <p>Terças e quintas das 13:00 às 18:00</p>
            </li>

            <li>
              <img className="img-aparelho" src="medico03.png" alt="Dra. Suzana" title="Dra. Suzana"/>
              <p>Dra. Suzana</p>
              <p>Terças, quintas e sábados das 08:00 às 12:00</p>
            </li>
          </ul>

        </div>
        
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>

          <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904
          </p>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr" width="100%" height="350"></iframe>
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Contato;

        
 