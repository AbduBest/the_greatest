import React from 'react';
import { useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Navbar = props => {
    const[bar, setBar] = useState(false)
    function change() {
        setBar(!bar)
    }
    return (
        <nav>
            <h1 className='name'>AbduBest</h1>
            <div className="right">
                <img src={bar ? props.img2 : props.img} onClick={change} alt=""/>
                <div className={bar ? "side_bar" : "side_bar2"} >
                    <BrowserRouter>
                        <NavLink to='/ali' onClick={window.location.reload}>Ali r.a</NavLink>
                        <NavLink to='/abubakr' onClick={window.location.reload}>Abu Bakr r.a</NavLink>
                        <NavLink to='/said' onClick={window.location.reload}>Said ibn Zayd</NavLink>
                        <NavLink to='/usmon' onClick={window.location.reload}>Usmon ibn Affon</NavLink>
                        <NavLink to='/' onClick={window.location.reload}>Umar Ibn Hattob</NavLink>
                        <NavLink to='/zubayr' onClick={window.location.reload}>Zubayr ibn Avvom</NavLink>
                        <NavLink to='/abdurahmon' onClick={window.location.reload}>Abdurahmon ibn Avf</NavLink>
                        <NavLink to='/sad' onClick={window.location.reload}>Sa'd ibn Abu Vakkos</NavLink>
                        <NavLink to='/ubaydulloh' onClick={window.location.reload} className="ohh">Talha ibn Ubaydulloh</NavLink>
                        <NavLink to='/ubayda' onClick={window.location.reload}>Abu Ubayda ibn Jarroh</NavLink>
                    </BrowserRouter>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;