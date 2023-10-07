import styled from "styled-components";

export const ImgStyled = styled.img`
    width: 324px;
    height: 151px;
    margin-right: 8px;
`

export const DivExterno = styled.div`
    margin-top: 50px;
    margin: 25px;
    height: 100%;
    width: 950px;
    display: flex;
    flex-direction: column;
`

export const DivBox = styled.div`
    height: 151px;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba( 0, 0, 0, 0.2 );
    color: #fff;
    &:hover{
        background: #23262E;
        cursor: pointer;
    }
`

export const DivTitle = styled.div`
    display: flex;
    line-height: 25px;
`

export const DivVerse = styled.div`
    line-height: 35px;
`