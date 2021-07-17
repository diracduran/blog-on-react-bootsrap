import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import glacier1 from '../images/pic1.jpg';
import glacier2 from '../images/pic2.jpg';
import glacier3 from '../images/pic3.jpg';


class Slider extends React.Component {
  render () {
    return (
      <Carousel>
      	<Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={glacier1}
		      alt="Glacier"
		    />
		    <Carousel.Caption>
			    <h3>Glacier</h3>
		      	<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		    </Carousel.Caption>
	    </Carousel.Item>
	    <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={glacier2}
		      alt="Glacier"
		    />
		    <Carousel.Caption>
			    <h3>Evening Glacier</h3>
		      	<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		    </Carousel.Caption>
	    </Carousel.Item>
	    <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src={glacier3}
		      alt="Glacier"
		    />
		    <Carousel.Caption>
			    <h3>Glacier In Alaska</h3>
		      	<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		    </Carousel.Caption>
	    </Carousel.Item>
      </Carousel>
    )
  }
}

export default Slider;