import React from 'react';
import style from "../Styles/pokecard.module.css";
import usePokemon from "../Hooks/usePokemon";
import {Link} from "react-router-dom";
import Loading from "../Components/Loading";

export default function PokeCard({url, id}) {
    const {pokemon, loading} = usePokemon(url);

    return (
        <div className={style.card} data-testid="pokemoncard">
          {loading ? <Loading width="15%"/> : <div><Link to={`/pokemon/${pokemon.id}`}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={"pokemon: " + pokemon.name}/></Link>
            <h2>{pokemon.name}</h2>
            <span className={style.id}>#{id}</span></div>}
        </div>
    );
}
