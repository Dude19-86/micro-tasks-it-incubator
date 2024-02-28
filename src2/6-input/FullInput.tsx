import React, {useState} from 'react';

type Message = {
    message: string
}
type FullInputType = {
    message: Message[]
    setMessage: React.Dispatch<React.SetStateAction<Message[]>>
    addMessage: (value: string) => void
    removeMessage: (id: number) => void
}
export const FullInput = (props: FullInputType) => {

    let [value, setValue] = useState('')

    const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        // if (value) {
        //     let newMessages = [{message: value}, ...props.message]
        //     props.setMessage(newMessages)
        // }
        if (value) {
            props.addMessage(value)
        }
        setValue('')
        console.log(props.message)
    }

    return (
        <div>
            <input value={value}
                   onChange={onChangeInputHandler} type="text"/>
            <button onClick={() => {
                onClickButtonHandler()
            }}>+
            </button>
        </div>
    );
};