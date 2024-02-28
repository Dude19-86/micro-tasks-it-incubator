import React from 'react';
import {MoneyType} from "./Filter";
import styled from "styled-components";

type CurrentBankomatesType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatesType) => {
    return (
        <Banknote colors={props.money.banknotes === 'Dollars' ? 'chartreuse' : 'cadetblue'}>
            <Name>{props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </Banknote>

        // <GreenBanknotes>>
        //     <Name>{props.money.banknotes}</Name>
        //     <Nominal>{props.money.value}</Nominal>
        //     {props.money.banknotes}
        // </GreenBanknotes> :
        // <BlueBanknotes>
        //     <Name>{props.money.banknotes}</Name>
        //     <Nominal>{props.money.value}</Nominal>
        //     {props.money.banknotes}
        // </BlueBanknotes>
    );
};

type PropsType = {
    colors: 'chartreuse' | 'cadetblue'
}

const Banknote = styled.div<PropsType>`
    background-color: ${props => props.colors};
         border: 1px solid black;
         width: 400px;
         height: 200px;
         margin: 10px;
`

// const GreenBanknotes = styled.div`
//     background-color: chartreuse;
//     border: 1px solid black;
//     width: 400px;
//     height: 200px;
//     margin: 10px;
// `
//
// const BlueBanknotes = styled.div`
//     background-color: cadetblue;
//     border: 1px solid black;
//     width: 400px;
//     height: 200px;
//     margin: 10px;
// `

const Name = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
`

const Nominal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 60px;
`

