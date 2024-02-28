import React from 'react';
import {FilteredType, MoneyType} from "./Filter";
import {CurrentBankomat} from "./CurrentBankomat";
import styled from "styled-components";


type FilterButtonType = {
    money: MoneyType[]
    removeHandler: (id: number) => void
    setFilter: (banknotes: FilteredType) => void
}


export const FilterButton = (props: FilterButtonType) => {

    const setAll = () => {
        props.setFilter("All")
    }

    const setRUB = () => {
        props.setFilter("RUB")
    }

    const setDollars = () => {
        props.setFilter("Dollars")
    }


    const mappedMoney = props.money.map((e, i) => {
        return (
            <div>
                <CurrentBankomat money={e} key={i} />
                <button onClick={() => props.removeHandler(i)}>Remove</button>
            </div>

        )
    })

    // const moneyRendering = props.money.map((e, i) => {
    //     return (
    //         <div key={i}>
    //             <span>{e.banknotes} </span>
    //             <span>{e.value} </span>
    //             <span> {e.number} </span>
    //             <button onClick={() => props.removeHandler(i)}>Remove</button>
    //         </div>
    //     )
    // })


    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setDollars}>Dollars</button>
            <button onClick={setRUB}>RUB</button>
            <Wrapper>
                {mappedMoney}
            </Wrapper>
        </div>
    );
};


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 30px;
`
