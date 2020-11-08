import React, { useState} from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import logo from '../../assets/MLI-logo.png'


function Home() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const show = expanded ? "show": " ";

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <Link className="navbar-brand" to="/"><img src={logo} alt="mli-logo" className="logo" /></Link>
      <button className="navbar-toggler" type="button" onClick={ toggleExpand }>
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className={"collapse navbar-collapse  " + show }>
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="products">Products</Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
