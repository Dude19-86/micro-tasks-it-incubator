import React, {useState} from 'react';
import {Input} from "./Input";
import {Button2} from "./Button2";
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;

export const NewComponent2 = () => {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const [value, setValue] = useState('')
    const addMessage = (value: string) => {
        let newMessages = [{message: value}, ...message]
        setMessage(newMessages)
    }

    const removeMessage = (id: number) => {
        let newMessage = message.filter((e, i) => i !== id)
        setMessage(newMessage)
    }

    const callBackButtonHandler = () => {
        addMessage(value)
        setValue('')
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.code === "Enter") {
            addMessage(value)
            setValue("")
        }
    }

    return (
        <div>
            {/*<FullInput message={message}*/}
            {/*           setMessage={setMessage}*/}
            {/*           addMessage={addMessage}*/}
            {/*           removeMessage={removeMessage}/>*/}
            <Input onKeyUp={onKeyPressHandler} setValue={setValue} value={value}/>
            <Button2  calBack={callBackButtonHandler} title={'+'}/>
            {message.map((e, i) => {
                return (
                    <div key={i}>{e.message}
                        <button onClick={() => {
                            removeMessage(i)
                        }}>X
                        </button>
                    </div>
                )
            })}
        </div>
    );
};