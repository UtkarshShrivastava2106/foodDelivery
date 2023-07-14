import { INCREMENT_COUNT, DECREMENT_COUNT, DECREMENT_COUNT_BY_10, INCREMENT_COUNT_BY_10, INCREMENT_COUNT_BY_50, DECREMENT_COUNT_BY_50, RESET } from "../ActionTypes"


export const incrementCount = ()=>{
return {
    type: INCREMENT_COUNT
}
}
export const incrementCountBy10= ()=>{
return {
    type: INCREMENT_COUNT_BY_10
}
}
export const incrementCountBy50= ()=>{
return {
    type:INCREMENT_COUNT_BY_50
}
}

export const decrementCountBy50=()=>
{
    return {
        type:DECREMENT_COUNT_BY_50
    }
}
export const decrementCountBy10= ()=>{
    return {
    type: DECREMENT_COUNT_BY_10
    }
}
export const decrementCount =()=>{
    return    {  type: DECREMENT_COUNT   }
}
export const reset= ()=>{
    return {
        type: RESET
    }
}
