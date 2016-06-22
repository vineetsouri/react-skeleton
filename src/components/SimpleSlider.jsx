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
            <img src='https://udemy-images.udemy.com/course/750x422/500628_a962.jpg' />
            <img src='http://blog.sendbird.com/wp-content/uploads/2016/02/reactive-native.png' />
            <img src='http://blog.ionic.io/wp-content/uploads/2016/02/ionic2beta.png' />
            <img src='http://placekitten.com/g/400/200' />
        </Slider>
      </div>
    );
  }
});

module.exports = SimpleSlider;