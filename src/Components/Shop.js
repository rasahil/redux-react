import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { actionCreators } from '../State/index'
import { bindActionCreators } from 'redux';

const Shop = () => {
  const balance = useSelector(state => state.amount)

  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney}= bindActionCreators(actionCreators, dispatch)
  
  return (
    <div classNameName=''>

      <center>
      <br /><br /><br />
      <div className='border border-2 w-50 p-4 rounded-2 shadow'>
        

            <h2>
            Deposite / Withdraw  money
            </h2>
            <button className="btn btn-primary mx-2 " onClick={()=>{withdrawMoney(100)}}>-</button>
            Update Balance ({  balance})
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>

            {/* <button className="btn btn-primary mx-2 " onClick={()=>{actions.withdrawMoney(100)}}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button> */}
        </div>
      </center><br /><br />
         

       

          
    </div>
  )
}

export default Shop
