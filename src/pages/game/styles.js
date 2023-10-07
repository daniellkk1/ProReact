import styled from "styled-components";

export const ContainerBase = styled.div`
    margin-top: 20px;
    height: 100%;
    width: 100%;
`

export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    width: 70%;
    margin: 0 auto;
    background: rgba( 0, 0, 0, 0.2 );
`

export const ContainerVerse = styled.div`
    color: #fff;
    width:600px;
    padding: 20px;
    line-height: 30px;
`

export const BtnBuy = styled.button`
    padding: 10px;
    margin-top: 10px;
    width: 50%;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    background: green;
    color: #fff;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        transform: scale(1.02)
    }
`