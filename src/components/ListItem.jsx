var React = require('react');
var listItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.ingredients}</h4>
      </li>
    );
  }
});

module.exports = ListItem;