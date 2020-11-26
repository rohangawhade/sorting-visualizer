import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import Wallpaper from '../assets/firewatch-wallpaper.jpg';

class SetCaraousel extends React.Component {
    render(){
        return(
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={Wallpaper}
                        style={{height: "400px", width: "400px"}}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src={Wallpaper}
                    style={{height: "400px", width: "400px"}}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Wallpaper}
                    style={{height: "400px", width: "400px"}}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        );
    }
}

export default SetCaraousel;