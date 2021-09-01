import React from "react";
import image from '../assets/img/doguito.svg';
import css from '../assets/css/componentes/cabecalho.css';
import {Link} from "react-router-dom";

const Cabecalho = () => {
    return (
        <header className='cabecalho container'>
            <div className='menu-hamburguer'>
                <span className='menu-hamburguer__icone'/>
            </div>
            <div className='cabecalho-container'>
                <a href='/' className='flex flex--centro'>
                    <img src={image} alt='Logo doguito' className='cabecalho__logo'/>
                    <h1 className='cabecalho__titulo'>Petshop</h1>
                </a>
            </div>

            <nav className='menu-cabecalho'>
                <ul className='menu-itens'>
                    <li>
                        <Link to='#' className='menu-itens menu-item--entrar'>Entrar</Link>
                    </li>
                    <li>
                        <Link to='#' className='menu-itens'>Produtos</Link>
                    </li>
                    <li>
                        <Link to='/' className='menu-itens'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/sobre' className='menu-itens'>Sobre</Link>
                    </li>
                </ul>
            </nav>
            <div className='menu-cabecalho-background'></div>
        </header>
    );
}

export default Cabecalho;