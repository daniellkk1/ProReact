import React from "react";
import { Routes, Route } from "react-router-dom";
import Collection from "../pages/collection/collection";
import Game from "../pages/game/game";
import { Games } from "../assets/utils/elements";

export default function Rotas(){
    return(
        <Routes>

            <Route element={<Collection/>} path="/" />
            {Games.map(item => {
                return(
                    <Route element={<Game 
                        video={item.video} 
                        nome={item.nome}
                        sinopse={item.sinopse}
                        preco={item.preco}
                        />} path={item.path}>    
                    </Route>
                )
            })}

        </Routes>
    )
}