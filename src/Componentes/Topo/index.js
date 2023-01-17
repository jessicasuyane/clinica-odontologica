import React from "react";
import { Link } from "react-router-dom";
import './estilo.css';

const Topo = () => {
    return(
        <header>
            <div className="boxLogo">
                <img src="dente.png" alt="dente"/>
                <h1>Dentes Saudáveis</h1>
            </div>
            <div className="boxLink">
            <Link className="topo-link" to="/">Home</Link>
            <Link className="topo-link" to="/contato">Contato</Link>

            

            </div>
        </header>
    );
}
export default Topo;