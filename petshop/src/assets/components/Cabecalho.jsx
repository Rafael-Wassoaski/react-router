import React from "react";
import image from '../img/doguito.svg';
import css from '../css/componentes/cabecalho.css';

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
                        <a href='#' className='menu-itens menu-item--entrar'>Entrar</a>
                    </li>
                    <li>
                        <a href='#' className='menu-itens'>Produtos</a>
                    </li>
                    <li>
                        <a href='/' className='menu-itens'>Blog</a>
                    </li>
                    <li>
                        <a href='/sobre' className='menu-itens'>Sobre</a>
                    </li>
                </ul>
            </nav>
            <div className='menu-cabecalho-background'></div>
        </header>
    );
}

export default Cabecalho;