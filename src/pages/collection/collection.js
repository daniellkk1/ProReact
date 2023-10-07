import React from "react";
import { Jogos } from "../../assets/utils/elements";
import { ImgStyled, DivExterno, DivBox, DivTitle, DivVerse} from "./styles";
import { Link } from "react-router-dom";

export default function Collection(){
    return(
        Jogos.map(jogo => {
            return(
        <DivExterno>
            <Link to={jogo.path}>
                <DivBox>
                    <DivTitle>
                        <ImgStyled src={jogo.imagem} />
                        <DivVerse>
                            <h2>{jogo.nome}</h2>
                            <p style={{color:'#556772', fontSize: 12}}>{jogo.plataforma}</p>
                            <p style={{color:'#556772', fontSize: 12}}>{jogo.genero}</p>
                        </DivVerse>
                    </DivTitle>
                    <p style={{marginRight:15}}>{jogo.preco}</p>
                </DivBox>
            </Link>
        </DivExterno>
            )
        })

    )
}