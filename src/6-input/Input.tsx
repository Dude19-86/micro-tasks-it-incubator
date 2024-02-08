import React from 'react';
type InputPropsType = {
    value: string,
    setValue: (value: string) => void,
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }



    return (
        <input value={props.value} onKeyUp={props.onKeyUp} onChange={onChangeInputHandler}/>
    );
};