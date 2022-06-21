import { Container, Row, Col, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import './App.css';
import Banner from './Banner';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, blue } from '@mui/material/colors';
import { useState } from 'react';
import { Card, CardActions, CardContent, Button, CardMedia, TextField } from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[900]
      },
      secondary: {
        main: blue[500]
      },
      third: {
        main: blue[200]
      },
      buttonColor: {
        main: 'rgb(243 144 74)'
      }
    },
  });

  let [colorTheme, setColorTheme] = useState({ ...theme });
  let [color, setColor] = useState('blue');
  const [isOpen, setIsOpen] = useState(false);

  const setTheme = (value) => {
    if(value === color) {
      setColor(value);
      setColorTheme(createTheme({ ...theme }));
    } else {
      setColor(value);
      setColorTheme(createTheme({ ...theme, palette: {
        primary: {
          main: green[900]
        },
        secondary: {
          main: green[500]
        },
        third: {
          main: green[200]
        },
        buttonColor: {
          main: 'rgb(241 211 71)'
        }
      }}));
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={colorTheme}>
      <div className="App">
        <div className='header'>
          <Container>
            <Row>
              <Col md={12}>
                <Navbar light expand="md">
                  <NavbarBrand href="/">
                    WEBLOGO
                  </NavbarBrand>
                  <NavbarToggler onClick={() => toggle()} />
                  <Collapse navbar className='rightend' isOpen={isOpen}>
                    <Nav navbar>
                      <NavItem>
                        <NavLink>
                          Link 1
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>
                          Link 2
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink>
                          Link 3
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='banner-section' style={{background: colorTheme.palette.primary.main}}>
          <Container>
            <Row className='bannerRow'>
              <Col lg={8} md={6} className='gallery'>
                <Banner />
              </Col>
              <Col lg={4} md={6} className={ color === 'blue' ? 'bluetheme sideCards': 'greentheme sideCards'}>
                <Card className='mb-10'>
                  <CardContent>
                    <h5>Lorem Ipsum</h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <h5>Lorem Ipsum</h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </CardContent>
                </Card>
              </Col>
            </Row> 
          </Container>
        </div>
        <div className={ color === 'blue' ? 'bluetheme middle-section': 'greentheme middle-section'}>
          <Container>
            <Row>
              <Col md={6}>
                <Card className='card-cont'>
                  <CardContent>
                    <h5>Lorem Ipsum</h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </CardContent>
                  <CardActions className="card-button-primary">
                    <Button size="medium" variant="contained">Show More</Button>
                  </CardActions>
                </Card>
              </Col>
              <Col md={6}>
                <Card className='card-cont'>
                  <CardContent>
                    <h5>Lorem Ipsum</h5>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  </CardContent>
                  <CardActions className="card-button-primary">
                    <Button size="medium" variant="contained">Show More</Button>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={ color === 'blue' ? 'bluetheme card-images': 'greentheme card-images'}>
          <Container>
            <Row>
              <Col lg={3} md={6}>
                <Card className='card-contents'>
                  <CardContent>
                    <h5>LOREM IPSUM</h5>
                    <h6>EXAMPLE TEXT</h6>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/cardimg.jpg"
                    alt="card image"
                    className='card-img'
                  />
                  <CardActions className="card-button-primary2">
                    <Button variant="contained">Show More</Button>
                  </CardActions>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card className='card-contents'>
                  <CardContent>
                    <h5>LOREM IPSUM</h5>
                    <h6>EXAMPLE TEXT</h6>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/cardimg.jpg"
                    alt="card image"
                    className='card-img'
                  />
                  <CardActions className="card-button-primary2">
                    <Button variant="contained">Show More</Button>
                  </CardActions>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card className='card-contents'>
                  <CardContent>
                    <h5>LOREM IPSUM</h5>
                    <h6>EXAMPLE TEXT</h6>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/cardimg.jpg"
                    alt="card image"
                    className='card-img'
                  />
                  <CardActions className="card-button-primary2">
                    <Button variant="contained">Show More</Button>
                  </CardActions>
                </Card>
              </Col>
              <Col lg={3} md={6}>
                <Card className='card-contents'>
                  <CardContent>
                    <h5>LOREM IPSUM</h5>
                    <h6>EXAMPLE TEXT</h6>
                  </CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://raw.githubusercontent.com/Aishwarya-Venkatraman/gallery/master/cardimg.jpg"
                    alt="card image"
                    className='card-img'
                  />
                  <CardActions className="card-button-primary2">
                    <Button variant="contained">Show More</Button>
                  </CardActions>
                </Card>
              </Col>
            </Row>
            <Row className='row-button'>
              <Col md={12} className='col-button'>
                <Button style={{background: colorTheme.palette.buttonColor.main, fontWeight: 900}} variant="contained">Show More</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='form-section'>
          <Container>
            <Row>
              <Col lg={4} md={4}>
                <p>Lorem ipsum dolor sit amet</p>
              </Col>
              <Col lg={3} md={2}>
                <TextField className="text-field" id="filled-basic" label="Name" variant="filled" />
              </Col>
              <Col lg={4} md={4}>
                <TextField className="text-field" id="filled-basic" label="Email" variant="filled" />
              </Col>
              <Col lg={1} md={2}>
                <Button variant="contained">Submit</Button>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='sub-footer' style={{background: colorTheme.palette.secondary.main, borderBottom: '5px solid #000', borderColor: colorTheme.palette.third.main}}>
          <Container>
            <Row>
              <Col md={12}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </Col>
            </Row>
          </Container>
        </div>
        <div className='footer'>
          <Container>
            <Row className='footer-links'>
              <Col md={2}>Link 1</Col>
              <Col md={2}>Link 2</Col>
              <Col md={2}>Link 3</Col>
              <Col md={2}>Link 4</Col>
              <Col md={2}>Link 5</Col>
              <Col md={2}>Link 6</Col>
            </Row>
            <Row>
              <Col md={12}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className='themeSelection'>
        <div style={{background: blue[900]}} onClick={() => setTheme('blue')}> </div>
        <div style={{background: green[900]}} onClick={() => setTheme('green')}> </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
