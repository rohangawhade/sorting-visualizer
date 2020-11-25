import React from 'react';

import './SortingVisualizer.css';

import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSortingAlgorithm';
import {SelectionSort} from '../SortingAlgorithms/SelectionSort';

import Button from 'react-bootstrap/Button';

const ANIMATION_SPEED_MS = 1000;

// const NUMBER_OF_ARRAY_BARS = 25;
const NUMBER_OF_ARRAY_BARS = 10;

export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            colorOrig: "#233659"
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const arrray = [];
        for (let i = 0; i<NUMBER_OF_ARRAY_BARS; i++){
            arrray.push(randomIntFromInterval(50, 600));
        }
        let arrayBars = document.querySelectorAll('.array-bar');
        arrayBars.forEach(arr => arr.style.backgroundColor = "#233659");
        this.setState({array:arrray});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? '#3B49DF' : '#363D44';
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

    selectionSort(){
        const animations = SelectionSort(this.state.array);
        console.log("animations = ");
        console.log(animations);
        let count=0;
        for(let i=0; i<this.state.array.length; i++){
            const arrayBars = document.querySelectorAll('.array-bar');
            console.log(arrayBars);
            let j=i;
            while(j<this.state.array.length){
                const [barOneIdx, barTwoIdx] = animations[count++];
                // const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    arrayBars[barOneIdx].style.backgroundColor = '#3B49DF';
                    arrayBars[barTwoIdx].style.backgroundColor = '#3B49DF';
                }, j*ANIMATION_SPEED_MS);
                j++;
            }
            // eslint-disable-next-line no-loop-func
            setTimeout(() => {
                const [barOneIdx, barTwoIdx] = animations[count++];
                // const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                arrayBars[barOneIdx].style.backgroundColor = '#3B49DF';
                arrayBars[barTwoIdx].style.backgroundColor = '#3B49DF';

                const [barOne, newHeight_one] = animations[count++];
                // const barOne_Style = arrayBars[barOne].style;
                arrayBars[barOne].style.height = `${newHeight_one}px`;

                const [barTwo, newHeight_two] = animations[count++];
                // const barTwo_Style = arrayBars[barTwo].style;
                arrayBars[barTwo].style.height = `${newHeight_two}px`;
            }, j*ANIMATION_SPEED_MS);
        }
    }

    bubbleSort(){}

    render(){
        const {array, colorOrig} = this.state;
        return(
            <div className="array-container">
            <div className="Buttons">
                <Button variant="outline-dark" onClick={() => this.resetArray()}>Generate new Array</Button>
                <Button variant="outline-primary" onClick={() => this.mergeSort()}>Merge Sort</Button>
                <Button variant="outline-primary" onClick={() => this.quickSort()}>Quick Sort</Button>
                <Button variant="outline-primary" onClick={() => this.selectionSort()}>Selection Sort</Button>
                <Button variant="outline-primary" onClick={() => this.bubbleSort()}>Bubble Sort</Button>
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