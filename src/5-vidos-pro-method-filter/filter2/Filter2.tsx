import React, {useState} from 'react';
import {FilterButton2} from "./FilterButton2";

export type FilteredValueType = "All" | "Dollars" | "RUB"

export const Filter2 = () => {

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

    const [filter, setFilter] = useState<FilteredValueType>("All")

    let filterMoney = money
    if (filter === "Dollars") {
        filterMoney = money.filter((e) => e.banknotes === "Dollars")
    }

    if (filter === "RUB") {
        filterMoney = money.filter((e) => e.banknotes === "RUB")
    }

    const filteredHandler = (value: FilteredValueType) => {
        setFilter(value)
    }

    const removeHandler = (id: number) => {
        filterMoney = money.filter((e, i) => i !== id)
        setMoney(filterMoney)
    }
    return (
        <div>
            <FilterButton2 money={filterMoney} onclickFilteredHandler={filteredHandler} removeHandler={removeHandler}/>
        </div>
    );
};