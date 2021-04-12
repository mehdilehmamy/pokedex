import React, {useState} from 'react';
import style from "../Styles/home.module.css";
import PokeCard from "../Components/PokeCard";
import Loading from "../Components/Loading";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';

export default function Home() {
    const [pokemon, setPokemon] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [loading, setLoading] = useState(true);

   
    const fetchPokemon = () => {
        axios.get(url)
       .then(function (response) {
        // handle success
        setLoading(false); //Loading state
        setPokemon(prev => {
            return [...prev, ...response.data.results];
        });
        setUrl(response.data.next);
     })
        .catch(function (error) {
            // handle error
            console.log("Could not retrieve data! Error:" + error);
        })
    }    

    return (
        <div className={style.home}>
        <InfiniteScroll
              pageStart={0}
              loadMore={fetchPokemon}
              hasMore={url}
              loader={<Loading width="10%"/>}
            > 
            <div className={style.cardcontainer}>
                {loading ? <Loading width="30%"/> : pokemon.map((pokemon, index) => {
                    return <PokeCard key={index * Math.random()} url={pokemon.url} id={index + 1}/>
                })}    
            </div>
            </InfiniteScroll>
        </div>
    )
}
