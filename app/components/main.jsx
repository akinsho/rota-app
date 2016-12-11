var React = require('react')
var navigation = require('./app/components/navigation.jsx')
var main = React.createClass({
  render: function(){
    return(
      <div>
        Main.jsx
        {props.children}
      </div>
    )
  }
});
module.exports =  main;
