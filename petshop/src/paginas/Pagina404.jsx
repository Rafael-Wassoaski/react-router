import React from "react";
import image from '../assets/img/doguito.svg';
import css from '../assets/css/404.css';

const Pagina404 = ()=> {
    return(
        <main className="container flex flex--centro flex--coluna" >
            <img src = {image} className='doguito-imagem' alt='Ilustração doguito'/>
            <p className='naoencontrado-texto'>
                Opa, essa página não existe
            </p>
        </main>
    )
}

export default Pagina404;