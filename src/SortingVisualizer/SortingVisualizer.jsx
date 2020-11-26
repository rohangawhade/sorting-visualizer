import React from 'react';

import './SortingVisualizer.css';

import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSortingAlgorithm';
import {SelectionSort} from '../SortingAlgorithms/SelectionSort';

import Button from 'react-bootstrap/Button';

const ANIMATION_SPEED_MS = 10;

const NUMBER_OF_ARRAY_BARS = 25;
// const NUMBER_OF_ARRAY_BARS = 10;

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
        // const arrray = [400, 200, 650, 100];
        let arrayBars = document.querySelectorAll('.array-bar');
        arrayBars.forEach(arr => arr.style.backgroundColor = "#233659");
        this.setState({array:arrray});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i%3 !== 2;
            console.log('inside for');
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i%3 === 0 ? '#3B49DF' : '#363D44';
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                    console.log('inside if setTimeout');
                }, i*ANIMATION_SPEED_MS);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    console.log('inside else setTimeout');       
                }, i*ANIMATION_SPEED_MS);
            }
        }

    }

    quickSort(){}

    selectionSort(){
        const animations = SelectionSort(this.state.array);
        console.log("animations = ");
        console.log(animations);
        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "iteration"? true:false;
            if(isColorChange){
                setTimeout(() => {
                    const [type, firstIdx, iterIdx] = animations[i];
                    const firstIdxStyle = arrayBars[firstIdx].style;
                    const iterIdxStyle = arrayBars[iterIdx].style;
                    firstIdxStyle.backgroundColor = "#3B49DF";
                    iterIdxStyle.backgroundColor = "#3B49DF";
                    console.log("value of i in if = "+i);
                }, i*ANIMATION_SPEED_MS);
            }else{
                if(animations[i].length === 2){
                    setTimeout(() => {
                        const [firstIdx, lowestIdx] = animations[i];
                        const firstIdxStyle = arrayBars[firstIdx].style;
                        const lowestIdxStyle = arrayBars[lowestIdx].style;
                        firstIdxStyle.backgroundColor = "#363D44";
                        lowestIdxStyle.backgroundColor = "#363D44";
                    }, i*ANIMATION_SPEED_MS);
                }else{
                    setTimeout(() => {
                        const [firstIdx, firstIdxValue, lowestIdx, lowestIdxValue] = animations[i];
                        const firstIdxStyle = arrayBars[firstIdx].style;
                        const lowestIdxStyle = arrayBars[lowestIdx].style;
                        firstIdxStyle.height = `${lowestIdxValue}px`;
                        lowestIdxStyle.height = `${firstIdxValue}px`;
                        console.log("value of i in else = "+i);
                    }, i*ANIMATION_SPEED_MS);
                }
            }
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