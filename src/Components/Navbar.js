import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const amount = useSelector(state => state.amount)
  const price = useSelector(state => state.price)
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/">Navbar</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/shoping">Shoping</Link>
                </li>

            </ul>
            <form className="d-flex position-absolute bg top-10 start-50 " role="search">
                <button disabled={true} className='btn btn-success btn-outline-danger me-xxl-4'> Total Price:- {price*700}</button>
                <button disabled={true} className='btn btn-primary me-xxl-4 '> Your balanced:- {amount}</button>
            </form>
            </div>
        </div>
        </nav>
      
    </div>
  )
}

export default Navbar
