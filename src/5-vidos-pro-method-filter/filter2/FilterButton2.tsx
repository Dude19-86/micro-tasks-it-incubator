import React from 'react';
import {FilteredValueType} from "./Filter2";

type MoneyType = {
    banknotes: string
    value: number
    number: string
}

type FilterButton2Type ={
    money: MoneyType[]
    onclickFilteredHandler: (value: FilteredValueType) => void
    removeHandler: (id: number) => void
}
export const FilterButton2 = (props: FilterButton2Type) => {
    return (
        <div>
            <ul>
                {props.money.map((item,index) => (
                    <li key={index}>
                        <span>{item.banknotes}</span>
                        <span>{item.value}</span>
                        <span>{item.number}</span>
                        <button onClick={() => props.removeHandler(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => props.onclickFilteredHandler("All")}>All</button>
            <button onClick={() => props.onclickFilteredHandler("Dollars")}>Dollars</button>
            <button onClick={() => props.onclickFilteredHandler("RUB")}>RUBs</button>
        </div>
    );
};