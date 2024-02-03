import React from 'react';

interface BodyProps {
    titleForBody: string
}

export const Body = (props: BodyProps) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    );
};