import React from 'react';
import style from "../Styles/navbar.module.css";

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.brand}>
                <img src="pokelogo.png" alt="pokemon logo" height="50px" width="50px"/>
                <h2>PokeDex</h2>
            </div>
        </div>
    )
}
