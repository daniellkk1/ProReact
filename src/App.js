import React from "react";
import iconsteam from './assets/images/Steam-Simbolo-.png'
import { DivContainer, Navigation, List, DivTotal} from "./styles";
import Rotas from "./routes/router";
import { Link } from "react-router-dom";

export default function App(){
  return(
    <DivTotal>
      <DivContainer>
        <Navigation>
          <img src={iconsteam}  style={{height: 40, width: 60}}/>
          <List>Loja</List>
          <Link to='/'>
            <List>Coleção</List>
          </Link>
          <List>Comunidade</List>
          <List>Usuário</List>
        </Navigation>
      </DivContainer>

      <Rotas/>
    </DivTotal>
  )
}
