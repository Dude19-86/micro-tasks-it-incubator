import React, {useState} from 'react';
import {FilterButton} from "./FilterButton";


export type FilteredType = "All" | "Dollars" | "RUB"
export type MoneyType = {
    banknotes: FilteredType
    value: number
    number: string
}
export const Filter = () => {


    const [money, setMoney] = useState<MoneyType[]>([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUB', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUB', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUB', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilteredType>('All')

    const moneyFilter = (money: MoneyType[], filter: FilteredType) => {
        if (filter === 'All') {
            return money
        }
        return money.filter(e => e.banknotes === filter)
    }

    const removeHandler = (id: number) => {
        setMoney(moneyFilter(money, filter).filter((el, index) => index !== id))
    }

    return (
        <div>
            <FilterButton
                removeHandler={removeHandler}
                money={moneyFilter(money, filter)}
                setFilter={setFilter}/>
        </div>
    );
};