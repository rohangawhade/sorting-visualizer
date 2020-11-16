import React from 'react';

import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/sortingAlgorithm.js';

import Button from 'react-bootstrap/Button';

const ANIMATION_SPEED_MS = 10;

const NUMBER_OF_ARRAY_BARS = 40;

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            // colorOrig: "#aa4668"
            colorOrig: "#9C4668"
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const arrray = [];
        for (let i = 0; i<NUMBER_OF_ARRAY_BARS; i++){
            arrray.push(randomIntFromInterval(5, 600));
        }
        let arrayBars = document.querySelectorAll('.array-bar');
        arrayBars.forEach(arr => arr.style.backgroundColor = "#9C4668");
        this.setState({array:arrray});
    }
    // #F3DCF6
    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? '#5319E7' : '#F3DCF6';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;        
                }, i*ANIMATION_SPEED_MS);
            }
        }

    }

    quickSort(){}

    heapSort(){}

    bubbleSort(){}

    render(){
        const {array, colorOrig} = this.state;
        return(
            <div className="array-container">
            <div className="Buttons">
                <Button variant="light" onClick={() => this.resetArray()}>Generate new Array</Button>
                <Button variant="outline-success" onClick={() => this.mergeSort()}>Merge Sort</Button>
                <Button variant="outline-success" onClick={() => this.quickSort()}>Quick Sort</Button>
                <Button variant="outline-success" onClick={() => this.heapSort()}>Heap Sort</Button>
                <Button variant="outline-success" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
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
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}