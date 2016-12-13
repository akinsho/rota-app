var React = require('react');

var Navigation = React.createClass({
  render: function(){
    return(
      <div className="menu-bar">
        <div className="menu-bar-left">
              Navigation
        </div>
        <div className="menu-bar-right">
          <ul className="menu">
            <a><li className="menu-items">
              Home
            </li></a>
            <a><li className="menu-items">
              Profile
            </li></a>
            <a><li className="menu-items">
              My Rota
            </li></a>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Navigation;
