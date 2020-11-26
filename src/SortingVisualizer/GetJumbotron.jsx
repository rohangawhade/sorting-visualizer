import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';

class SetJumbotron extends React.Component{
    render(){
        return(
            <Jumbotron>
                <h1>Welcome to Sorting Visualizer</h1>
                <h5>
                    Sorting Visualizer is a React application build to visualize various sorting algorithms
                </h5>
                <a href="https://github.com/rohangawhade/sorting-visualizer">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Go to Github Repository"/>
                </a>
            </Jumbotron>
        );
    }
}
export default SetJumbotron