import React from 'react';

type ButtonPropsType = {
    title: string
    calBack: () => void
}
export const Button2 = (props: ButtonPropsType) => {

    const onClickButtonHandler = () => {
        props.calBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.title}</button>
    );
};