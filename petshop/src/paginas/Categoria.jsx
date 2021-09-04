import React, {useState, useEffect} from "react";
import '../assets/css/blog.css';
import ListaCategorias from "../components/ListaCategorias";
import {Link, Route, Router, Switch, useParams, useRouteMatch} from "react-router-dom";
import ListaPost from "../components/ListaPost";
import {busca} from "../api/api";
import * as url from "url";
import SubCategoria from "./SubCategoria";

const Categoria = () => {
    const {categoria} = useParams();
    const {url, path} = useRouteMatch();
    const [subCategorias, setSubCategorias] = useState([]);
    useEffect(() => {
        busca(`/categorias/${categoria}`, (categoria) => {
            setSubCategorias(categoria.subcategorias);
        })
    }, [categoria]);

    return (
        <>
            <div className={'container'}>
                <h2 className={'titulo-pagina'}>Pet notícias</h2>
            </div>
            <ListaCategorias/>
            <ul className={'lista-categorias container flex'}>
                {
                    subCategorias.map(subCategoria => {
                        return (
                            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria}`}
                                key={subCategoria}>
                                <Link to={`${url}/${subCategoria}`}>
                                    {subCategoria}
                                </Link>
                            </li>
                        );
                    })
                }

            </ul>
            <Switch>
                <Route exact path={`${path}`}>
                    <ListaPost url={`/posts?categoria=${categoria}`}/>
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria/>
                </Route>
            </Switch>
        </>
    )
}
export default Categoria;