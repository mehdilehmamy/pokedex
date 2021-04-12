import { useEffect, useState  } from 'react';
import axios from 'axios';

const usePokemon = (url) => {
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        axios.get(url)
        .then(function (response) {
          // handle success
          setPokemon(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log("Could not retrieve data! Error:" + error);
        })
    }, []);

    return {pokemon, loading};
}

export default usePokemon;