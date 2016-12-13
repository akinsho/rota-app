var React = require('react')
import Navigation from './Navigation.js'

var main = React.createClass({
  render: function(){
    return(
      <div>
      <Navigation/>
      {this.props.children}
      </div>
    )
  }
});
module.exports =  main;
