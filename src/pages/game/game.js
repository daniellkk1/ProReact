import React from "react";
import { ContainerBox, ContainerBase, ContainerVerse, BtnBuy } from "./styles";

export default function Game(props){
    return(
        <ContainerBase>
            <ContainerBox>
                
                <iframe width="100%" height="415" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <ContainerVerse>
                    <h2>{props.nome}</h2>
                    <p style={{color:'#556772', fontSize: 18}}>{props.sinopse}</p>
                    <p style={{fontSize: 17}}>{props.preco}</p>
                    <BtnBuy>Adicionar ao carrinho +</BtnBuy>
                </ContainerVerse>
            </ContainerBox>
        </ContainerBase>
    )
}