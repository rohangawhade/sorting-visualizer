import React from 'react';

import './SortingVisualizer.css';

import {mergeSort} from '../AnimationAlgorithms/AnimationFunctions';
import {quickSort} from '../AnimationAlgorithms/AnimationFunctions';
import {bubbleSort} from '../AnimationAlgorithms/AnimationFunctions';
import {heapSort} from '../AnimationAlgorithms/AnimationFunctions';
import {selectionSort} from '../AnimationAlgorithms/AnimationFunctions';
import CompareVisualizer from './CompareVisualizer';
import UserInput from './UserInput';
import SetJumbotron from './GetJumbotron';

import Button from 'react-bootstrap/Button';

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            colorOrig: "#233659",
            modalshow: false,
            userip:false,
            compare:false,
            noOfBars: 30,
            animationSpeed: 10
        };
        this.modalShowtoggle = this.modalShowtoggle.bind(this);
        this.modalHidetoggle = this.modalHidetoggle.bind(this);
        this.comparealgo = this.comparealgo.bind(this);
        this.user = this.user.bind(this);
        this.noOfBarsValue = this.noOfBarsValue.bind(this);
        this.setAnimationSpeed = this.setAnimationSpeed.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSpeedChange = this.handleSpeedChange.bind(this);
    }

    componentDidMount(){
        this.resetArray();
    }

    user(arrayy){
        this.setState({array:arrayy});
    }

    noOfBarsValue(value){
        this.setState({noOfBars:value.target.value}, () => this.resetArray());
    }

    setAnimationSpeed(value){
        this.setState({animationSpeed:value.target.value});
    }

    resetArray(){
        const arrray = [];
        for (let i = 0; i<this.state.noOfBars; i++){
            arrray.push(randomIntFromInterval(50, 600));
        }
        let arrayBars = document.querySelectorAll('.array-bar');
        arrayBars.forEach(arr => arr.style.backgroundColor = "#233659");
        this.setState({array:arrray});
    }

    comparealgo(t){
        this.setState({compare:t});
    }
    modalShowtoggle(){
        this.setState({userip:true})
        this.setState({modalshow: true});
    }
    modalHidetoggle(){
        this.setState({modalshow: false});
    }
    handleChange(event){
        this.setState({narraybars: parseInt(event.target.value)}, ()=> this.resetArray());
    }
    handleSpeedChange(event){
        this.setState(()=>({animationSpeed: 10-event.target.value}));
    }
    render(){
        const {array, colorOrig, noOfBars, animationSpeed} = this.state;
        return(
            <>
            <SetJumbotron />
            {!this.state.compare &&
                <div className="array-container">
                    <div className="Sliders">
                        <div>
                            <h5>No of Bars</h5>
                            <input type="range" value={noOfBars} min={1} max={80} onChange={this.noOfBarsValue}/>
                            <h5>{noOfBars}</h5>
                        </div>
                        <div>
                            <h5>Speed of visualizer</h5>
                            <input type="range" value={animationSpeed} min={1} max={2000} onChange={this.setAnimationSpeed}/>
                            <h5>{animationSpeed}</h5>
                        </div>
                    </div>
                <div className="Buttons">
                    <Button variant="outline-dark" onClick={() => this.resetArray()}>Generate new Array</Button>
                    <Button variant="outline-dark" onClick={() => this.modalShowtoggle()}>Enter values</Button>
                    <Button variant="outline-dark" onClick={() => this.comparealgo(true)}>Compare</Button>
                    <Button variant="outline-primary" onClick={() => mergeSort(array, animationSpeed)}>Merge Sort</Button>
                    <Button variant="outline-primary" onClick={() => quickSort(array, animationSpeed)}>Quick Sort</Button>
                    <Button variant="outline-primary" onClick={() => selectionSort(array, animationSpeed)}>Selection Sort</Button>
                    <Button variant="outline-primary" onClick={() => bubbleSort(array, animationSpeed)}>Bubble Sort</Button>
                    <Button variant="outline-primary" onClick={() => heapSort(array, animationSpeed)}>Heap Sort</Button>
                </div>
                    <div className="inner-container">
                        {array.map((value, idx) => (
                            <div
                                className='array-bar'
                                key={idx}
                                style={{height: `${value}px`, backgroundColor: `${colorOrig}`}}>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {this.state.compare &&
                <CompareVisualizer
                compare={this.state.compare}
                comparealgo={this.comparealgo}
                />
            }
            {this.state.userip &&
                <UserInput
                show={this.state.modalshow}
                onHide={this.modalHidetoggle}
                user={this.user}
                />
            }
            </>
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor((Math.random() * (max - min + 1) + min)*0.7);
}