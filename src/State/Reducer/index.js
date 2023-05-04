import { combineReducers } from "redux";
import Amountreducer from "./Amountreducer";
import Pricereducer from "./Pricereducer"

const reducers = combineReducers({
    amount: Amountreducer,
    price: Pricereducer,
    
})

export default reducers;