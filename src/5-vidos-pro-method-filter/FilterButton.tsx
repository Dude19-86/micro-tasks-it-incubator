import React from 'react';
import {FilteredType} from "./Filter";

type MoneyType = {
    banknotes: string
    value: number
    number: string
}
type FilterButtonType = {
    money: MoneyType[]
    onClickFilterHandler: (value: FilteredType) => void
    removeHandler: (id: number) => void
}


export const FilterButton = (props: FilterButtonType) => {

    return (
        <div>
            <ul>
                {props.money.map((e, i) => {
                    return (
                        <li key={i}>
                            <span>{e.banknotes} </span>
                            <span>{e.value} </span>
                            <span> {e.number} </span>
                            <button onClick={() => props.removeHandler(i)}>Remove</button>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickFilterHandler("all")}>All</button>
            <button onClick={() => props.onClickFilterHandler("Dollars")}>Dollars</button>
            <button onClick={() => props.onClickFilterHandler("RUB")}>RUB</button>
        </div>
    );
};