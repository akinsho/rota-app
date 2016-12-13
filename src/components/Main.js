var React = require('react')
var main = React.createClass({
  render: function(){
    return(
      <div>
      <div>{this.props.children}</div>
      Main.jsx
      </div>
    )
  }
});
module.exports =  main;
