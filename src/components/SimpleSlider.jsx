var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true
    };
    var divStyle = {
      margin: '0 auto',
      padding: '40px',
      width: '80%',
      height: '500px',
      color: '#333',
      background: '#419be0'
    };
    return (
      <div style={divStyle}>
        <Slider {...settings}>
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
        </Slider>
      </div>
    );
  }
});

module.exports = SimpleSlider;