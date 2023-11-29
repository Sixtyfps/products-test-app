import {createStore} from "redux";
import {productsReducer} from "./products-reducer";

export const store = createStore(productsReducer)
