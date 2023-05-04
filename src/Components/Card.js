import React from 'react'
import Img from '../Components/img/img1.jpeg'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index'
import { Link } from 'react-router-dom';


const Card = () => {
    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
      <br /><br /><br />
      <center>
       <div className="card text-center mb-2 text-bg-dark shadow-lg" style={{width: "15rem"}}>
            <Link to="">
            <img src={ Img } className="card-img-top" alt="..."/>
            </Link>
            <div className="card-body">
                <h5 className="card-title">G-shok Watch</h5>
                <p className="card-text">Rs. 700</p>
                
                <div>
                <button className='btn btn-primary mx-2' onClick={()=>{actions.decreaseQty(1)}} >-</button>
                Add Quantity
                <button className='btn btn-primary mx-2' onClick={()=>{actions.increaseQty(1)}}>+</button>
                </div>
<br />
                <div className="btn btn-outline-success">Add to Cart</div>
            </div>
            
        </div>  

        {/* iyhroit */}
        
        </center> 
    </div>
  )
}

export default Card
