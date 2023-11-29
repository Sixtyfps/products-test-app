import React, {ChangeEvent} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {setSearchValueAC} from "./state/products-reducer";
import {ProductsContainer} from "./components/Products/ProductsContainer";
import {InputComponent} from "./components/InputComponent/InputComponent";


function App() {
    const dispatch = useDispatch()


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValueAC(e.currentTarget.value))
    }


    return (
        <div>
            <InputComponent onChangeHandler={onChangeHandler}/>
            <ProductsContainer />
        </div>
    );
}

export default App;
