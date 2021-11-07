import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className={"nav"}>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'} >About</Link>
            <Link to={'/list'} >List</Link>
            {/* <Link to={{ pathname:'/about', state: {fromNavigation: true}}} >About</Link> router props사용 */}
        </div>

    )

}

export default Navigation;
