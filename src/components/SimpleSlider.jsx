var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true
    };
    return (
      <div className='container'>
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