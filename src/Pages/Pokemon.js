import React from 'react';
import style from "../Styles/pokemon.module.css";
import usePokemon from "../Hooks/usePokemon";
import { useParams } from 'react-router';
import {Link} from "react-router-dom";
import Loading from "../Components/Loading";

export default function Pokemon() {
    const {id} = useParams();
    const {pokemon, loading} = usePokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return (
        <div className={style.container}>
            <Link to="/" className={style.link}>Go back</Link>
             <div className={style.pokecontainer}>
             {loading ? <Loading/> : <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="Pokemon"/> }
                <div className={style.pokeinfo}>
                    <h1>Name: </h1><span>{pokemon.name}</span>
                    <h1>Height: </h1><span>{pokemon.height}</span>
                    <h1>Weight: </h1><span>{pokemon.weight}</span>
                </div>
            </div>
        </div>
    )
}
