import React from 'react';
import {Link} from 'react-router'


var Navigation = React.createClass({
  render: function(){
    return(
      <div className="menu-bar">
        <div className="menu-bar-left">
          <span className="menu-title">Render Rota</span>
        </div>
        <div className="menu-bar-right">
          <ul className="menu">
            <li className="menu-items">
              <Link to="/Home" activeClassName="active" activeStyle={{fontWeight:"bold", textDecoration:"none"}}>Home</Link>
            </li>
            <li className="menu-items">
              <Link to="/Profile" activeClassName="active" activeStyle={{fontWeight:"bold", textDecoration:"none"}}>Profile</Link>
            </li>
            <li className="menu-items">
              <Link to="/Rota" activeStyle={{fontWeight:"bold", textDecoration:"none"}} activeClassName="active">My Rota</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Navigation;
