import React, {useState} from 'react';
import {FilteredValueType} from "./Filter2";
import {v1} from "uuid/index";

type MoneyType = {
    banknotes: string
    value: number
    number: string
}

type FilterButton2Type = {
    money: MoneyType[]
    onclickFilteredHandler: (value: FilteredValueType) => void
    removeHandler: (id: number) => void
    addMoneyHandler: (banknotes: string, value: number, number: string) => void
}
export const FilterButton2 = (props: FilterButton2Type) => {

    const [banknotes, setBanknotes] = useState('')
    const [value, setValue] = useState(0)
    const [number, setNumber] = useState('')
    const [id, setId] = useState('')


    return (
        <div>
            <input value={banknotes}
                   onChange={(e) => {
                       setBanknotes(e.currentTarget.value)
                   }}/>
            <input value={value}
                   onChange={(e) => {
                       setValue(parseInt(e.currentTarget.value))
                   }}/>
            <input value={number}
                   onChange={(e) => {
                       setNumber(e.currentTarget.value)
                   }}/>

            <button onClick={() => {
                props.addMoneyHandler(banknotes, value, number)
                setBanknotes("")
                setValue(0)
                setNumber('')
            }}>+
            </button>
            <ul>
                {props.money.map((item, index) => (
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