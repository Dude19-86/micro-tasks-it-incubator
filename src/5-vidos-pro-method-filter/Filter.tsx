import React, {useState} from 'react';
import {FilterButton} from "./FilterButton";


export type FilteredType = "all" | "Dollars" | "RUB"

export const Filter = () => {


    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUB', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUB', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUB', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilteredType>('all')

    let filteredMoney = money

    if (filter === "Dollars") {
        filteredMoney = money.filter(e => e.banknotes === "Dollars")
    }

    if (filter === "RUB") {
        filteredMoney = money.filter(e => e.banknotes === "RUB")
    }
    const filterHandler = (value: FilteredType) => {
        setFilter(value)
    }

    const removeHandler = (id: number) => {
        filteredMoney = money.filter((el, index) => index !== id)
        setMoney(filteredMoney)
    }

    return (
        <div>
            <FilterButton removeHandler={removeHandler} onClickFilterHandler={filterHandler} money={filteredMoney}/>
        </div>
    );
};