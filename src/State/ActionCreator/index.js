export const depositMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
    }    
}

export const increaseQty = (price) =>{
    return (dispatch)=>{
        dispatch({
            type:'increase',
            payload: price
        })
    }
}

export const decreaseQty = (price) =>{
    return (dispatch)=>{
        dispatch({
            type:'decrease',
            payload: price
        })
    }    
}