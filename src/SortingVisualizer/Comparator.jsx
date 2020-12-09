import React from 'react';

import {mergeSort} from '../AnimationAlgorithms/AnimationFunctions';
import {quickSort} from '../AnimationAlgorithms/AnimationFunctions';
import {bubbleSort} from '../AnimationAlgorithms/AnimationFunctions';
import {heapSort} from '../AnimationAlgorithms/AnimationFunctions';
import UserInput from './UserInput';

import Button from 'react-bootstrap/Button';

export default class Comparator extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            colorOrig: "#233659",
            modalshow: false,
            userip:false,
            compare:true,
            noOfBars: 40,
            animationSpeed: 10
        };
        this.modalShowtoggle = this.modalShowtoggle.bind(this);
        this.modalHidetoggle = this.modalHidetoggle.bind(this);
        this.user = this.user.bind(this);
        this.goBack = this.goBack.bind(this);
        this.noOfBarsValue = this.noOfBarsValue.bind(this);
        this.startCompare = this.startCompare.bind(this);
        this.setAnimationSpeed = this.setAnimationSpeed.bind(this);
    }
    goBack(val){
        this.props.compare(val);
    }

    noOfBarsValue(value){
        this.setState({noOfBars:value.target.value}, () => this.resetArray());
    }
    
    setAnimationSpeed(value){
        this.setState({animationSpeed:value.target.value});
    }

    modalShowtoggle(){
        this.setState({userip:true})
        this.setState({modalshow: true});
    }

    user(arrayy){
        this.setState({array:arrayy});
    }
    
    modalHidetoggle(){
        this.setState({modalshow: false});
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const arrray = [];
        for (let i = 0; i<this.state.noOfBars; i++){
            arrray.push(this.randomIntFromInterval(50, 400));
        }
        let arrayBars = document.querySelectorAll('.array-bar');
        arrayBars.forEach(arr => arr.style.backgroundColor = "#233659");
        this.setState({array:arrray});
    }

    randomIntFromInterval(min, max){
        return Math.floor((Math.random() * (max - min + 1) + min)*0.40);
    }

    startCompare(array, animationSpeed){
        quickSort('quick', array, animationSpeed);
        // bubbleSort('bubble', array, animationSpeed);
        mergeSort('merge', array, animationSpeed);
        heapSort('heap', array, animationSpeed);
    }

    render(){
        const {array, colorOrig, noOfBars, animationSpeed} = this.state;
        return(
            <>
            {this.state.compare &&
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
                    <Button variant="outline-danger" onClick={() => this.goBack(false)}>Go Back</Button>
                    <Button variant="outline-success" onClick={() => this.startCompare(array, animationSpeed)}>Start</Button>
                </div>
                    <h5 className="comparator">Merge Sort</h5>
                    <div className="compare-inner-container">
                        {array.map((value, idx) => (
                            <div
                                className='merge-array-bar'
                                key={idx}
                                style={{height: `${value}px`, backgroundColor: `${colorOrig}`}}>
                            </div>
                        ))}
                    </div>
                    <h5 className="comparator">Quick Sort</h5>
                    <div className="compare-inner-container">
                        {array.map((value, idx) => (
                            <div
                                className='quick-array-bar'
                                key={idx}
                                style={{height: `${value}px`, backgroundColor: `${colorOrig}`}}>
                            </div>
                        ))}
                    </div>
                    <h5 className="comparator">Heap Sort</h5>
                    <div className="compare-inner-container">
                        {array.map((value, idx) => (
                            <div
                                className='heap-array-bar'
                                key={idx}
                                style={{height: `${value}px`, backgroundColor: `${colorOrig}`}}>
                            </div>
                        ))}
                    </div>
                    {/* <div className="compare-inner-container">
                        {array.map((value, idx) => (
                            <div
                                className='bubble-array-bar'
                                key={idx}
                                style={{height: `${value}px`, backgroundColor: `${colorOrig}`}}>
                            </div>
                        ))}
                    </div> */}
                </div>
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