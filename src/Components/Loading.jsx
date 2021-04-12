import React from 'react';
import style from "../Styles/loading.module.css";

export default function Loading({width}) {
    return (
        <div className={style.container}>
            <img src="pokelogo.png" alt="loading" width={width} className={style.loading}/>
        </div>
    )
}
