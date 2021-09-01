import React, {useState, useEffect} from "react";
import {busca} from '../api/api';
import {Link} from "react-router-dom";

const ListaPost = ({url}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        busca(url, setPosts);
    }, [url]);

    return (
        <section className='posts  container'>
            {
                posts.map((post) => {
                    return (
                        <article key={post.id} className={`post cartao-post cartao-post--${post.categoria}`}>
                            <Link>
                                <h3 className='cartao-post__titulo'>
                                    {
                                        post.title
                                    }
                                </h3>
                                <p className='cartao-post__meta'>
                                    {
                                        post.metadescription
                                    }
                                </p>
                            </Link>
                        </article>
                    )
                })
            }
        </section>
    );
};

export default ListaPost;