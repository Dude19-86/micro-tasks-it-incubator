import React from 'react';

interface HeaderProps {
    title: string
}

export const Header = (props: HeaderProps) => {
    return (
        <>
            {props.title}
        </>
    );
};