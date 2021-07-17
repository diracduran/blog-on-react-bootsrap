import React from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';


class About extends React.Component {
  render () {
    return (
      <Container>
      	<Tab.Container id="left-tabs-example" defaultActiveKey="first">
      		<Row>
			    <Col sm={3}>
			      <Nav variant="pills" className="flex-column mt-3">
			        <Nav.Item>
			          <Nav.Link eventKey="first">Design</Nav.Link>
			        </Nav.Item>
			        <Nav.Item>
			          <Nav.Link eventKey="second">Team</Nav.Link>
			        </Nav.Item>
			        <Nav.Item>
			          <Nav.Link eventKey="third">Programming</Nav.Link>
			        </Nav.Item>
			        <Nav.Item>
			          <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
			        </Nav.Item>
			        <Nav.Item>
			          <Nav.Link eventKey="fifth">Libraries</Nav.Link>
			        </Nav.Item>
			      </Nav>
			    </Col>
			    <Col sm={9}>
			      <Tab.Content className="flex-column mt-3">
			        <Tab.Pane eventKey="first">
			          <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" alt="" />
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			          consequat.</p>
			        </Tab.Pane>
			        <Tab.Pane eventKey="second">
			           <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" alt="" />
			          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
			          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			        </Tab.Pane>
			        <Tab.Pane eventKey="third">
			          <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" alt="" />
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			          consequat.</p>
			        </Tab.Pane>
			        <Tab.Pane eventKey="fourth">
			           <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" alt="" />
			          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
			          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			        </Tab.Pane>
			        <Tab.Pane eventKey="fifth">
			          <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/89d45527-c11f-425e-96f3-c917f27e5ca9/figma-covers-in-action.gif" alt="" />
			          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			          consequat.</p>
			        </Tab.Pane>
			      </Tab.Content>
			    </Col>
			  </Row>
      	</Tab.Container>
      </Container>
    )
  }
}

export default About;