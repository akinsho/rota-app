import React from 'react';
import {Link} from 'react-router'


var Navigation = React.createClass({
  render: function(){
    return(
      <div className="menu-bar">
        <div className="menu-bar-left">
              Navigation
        </div>
        <div className="menu-bar-right">
          <ul className="menu">
            <li className="menu-items">
              <Link to="/Home" activeClassName="active" activeStyle={{fontWeight:"bold"}}>Home</Link>
            </li>
            <li className="menu-items">
              Profile
            </li>
            <li className="menu-items">
              <Link to="/Rota" activeStyle={{fontWeight:"bold"}} activeClassName="active">My Rota</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Navigation;
