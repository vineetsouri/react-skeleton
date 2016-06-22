var React = require('react');
var ListItem = React.createClass({
  render: function() {
    return (
      <h4>
        <li>
          {this.props.text}
        </li>
      </h4>
    );
  }
});

module.exports = ListItem;