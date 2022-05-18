import React, { useState } from 'react';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Loading from '../Loading/Loading';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const [openNav, setOpenNav] = useState(false);

    const handleSignOut = () => {
      signOut(auth).then(() => {
        
      }).catch((error) => {
        
      });
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className="header">
      <div>
        <Link to="/"><h1 className="title">To Do App</h1></Link>
      </div>
      <div>
        <nav className={openNav ? " nav-close":"nav-open"}>
          <NavLink className="link-btn" to="/">Home</NavLink>
          {!user ? <NavLink className="login-btn" to="/login">Login</NavLink>:
          <NavLink onClick={() => handleSignOut()} className="login-btn" style={{background:'red'}} to="/login">Logout</NavLink>}
        </nav>
        <button onClick={() => {setOpenNav(!openNav)}} className="menu-ico">{openNav ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenuUnfold></AiOutlineMenuUnfold>}</button>
      </div>
    </div>
    );
};

export default Header;