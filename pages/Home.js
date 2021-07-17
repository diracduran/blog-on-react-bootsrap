import React from 'react';
import Slider from '../components/Slider.js';
import Carousel from 'react-bootstrap/Carousel';
import {Container, CardDeck, Card, Button} from 'react-bootstrap';


class Home extends React.Component {
  render () {
    return (
    	<>
		    <Slider />
					<CardDeck className="mt-3 mb-3">
							<Card>
						    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/18/81/fd/21/caption.jpg" />
						    <Card.Body>
						      <Card.Title>Card title</Card.Title>
						      <Card.Text>
						        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
						        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						      </Card.Text>
						      <Button variant="primary"> About</Button>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
					    </Card>
					    <Card>
						    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/18/81/fd/21/caption.jpg" />
						    <Card.Body>
						      <Card.Title>Card title</Card.Title>
						      <Card.Text>
						        Ut enim ad minim veniam, quis nostrud exercitation
						         ullamco laboris nisi ut aliquip ex ea commodo
								consequat.
						      </Card.Text>
						      <Button variant="primary"> About</Button>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
							</Card>
							<Card>
						    <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/photo-s/18/81/fd/21/caption.jpg" />
						    <Card.Body>
						      <Card.Title>Card title</Card.Title>
						      <Card.Text>
						        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						        Excepteur sint occaecat cupidatat non proident, 
						        sunt in culpa qui officia deserunt mollit anim id est laborum.
						      </Card.Text>
						      <Button variant="primary"> About</Button>
						    </Card.Body>
						    <Card.Footer>
						      <small className="text-muted">Last updated 3 mins ago</small>
						    </Card.Footer>
							</Card>
					</CardDeck>
			</>
    )
  }
}

export default Home;