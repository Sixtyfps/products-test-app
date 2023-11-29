import React, {ChangeEvent} from 'react';

type InputComponentType = {
    onChangeHandler:(e: ChangeEvent<HTMLInputElement>)=>void
}

export const InputComponent = (props: InputComponentType) => {
    return (
        <div>
            <input onChange={props.onChangeHandler}/>
        </div>
    );
};