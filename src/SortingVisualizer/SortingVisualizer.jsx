import React from 'react';

import './SortingVisualizer.css';

import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSortingAlgorithm';
import {SelectionSort} from '../SortingAlgorithms/SelectionSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort';
import UserInput from './UserInput';
import SetCaraousel from './GetCaraousel';
import SetJumbotron from './GetJumbotron';

import Button from 'react-bootstrap/Button';

const ANIMATION_SPEED_MS = 10;

const NUMBER_OF_ARRAY_BARS = 45;

const PRIMARY_COLOR = '#363D44';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = '#3B49DF';

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
            animationSpeed: 30
        };
        this.modalShowtoggle = this.modalShowtoggle.bind(this);
        this.modalHidetoggle = this.modalHidetoggle.bind(this);
        this.comparealgo = this.comparealgo.bind(this);
        this.user = this.user.bind(this);
        this.noOfBarsValue = this.noOfBarsValue.bind(this);
        this.setAnimationSpeed = this.setAnimationSpeed.bind(this);
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
                }, i*this.state.animationSpeed);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight*0.7}px`;
                    console.log('inside else setTimeout');       
                }, i*this.state.animationSpeed);
            }
        }

    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
    
        for (let i = 0; i < animations.length; i++) {
            //console.log(i+1);
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 1;
            if(isColorChange) {
                if(i%3===0){
                    const [barOneIdx, barTwoIdx, pivotidx] = animations[i];
                   
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const pivotidxStyle = arrayBars[pivotidx].style;
    
                    //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                    setTimeout(() => {
                    
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    pivotidxStyle.backgroundColor = '#000000';
                    }, i * ANIMATION_SPEED_MS);

                }
                else{
                    
                    const [barOneIdx, barTwoIdx, pivotidx] = animations[i];
                    
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const pivotidxStyle = arrayBars[pivotidx].style;
    
                    //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                    setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    pivotidxStyle.backgroundColor = PRIMARY_COLOR;
                    }, i * ANIMATION_SPEED_MS);
                }
            }
            else {
                setTimeout(() => {
                
                if(animations[i].length!==0){
                    const [barOneIdx, barTwoIdx, new1height, new2height] = animations[i];
    
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${new2height}px`;
    
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${new1height}px`;
                }
                }, i * ANIMATION_SPEED_MS);
            
            }
          }
        
      }

    selectionSort(){
        const animations = SelectionSort(this.state.array);
        console.log("animations = ");
        console.log(animations);
        for(let i=0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === "iteration"? true:false;
            if(isColorChange){
                setTimeout(() => {
                    const [, firstIdx, iterIdx] = animations[i];
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

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
    
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 1;
            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else{
                setTimeout(() => {
                
                    if(animations[i].length!==0){
                        const [barOneIdx, barTwoIdx, new1height, new2height] = animations[i];
        
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${new2height}px`;
        
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barTwoStyle.height = `${new1height}px`;
                    }
                    }, i * ANIMATION_SPEED_MS);
            }
        }
    
      }

      comparealgo(){
        this.setState({compare:true});
      }
      modalShowtoggle(){
        this.setState({userip:true})
        this.setState({modalshow: true});
      }
      modalHidetoggle(){
        this.setState({modalshow: false});
      }

    render(){
        const {array, colorOrig} = this.state;
        return(
            <>
            <SetJumbotron />
            {!this.state.compare &&
                <div className="array-container">
                    <div className="Sliders">
                        <div>
                            <h5>No of Bars</h5>
                            <input type="range" min={1} max={80} onChange={this.noOfBarsValue}/>
                        </div>
                        <div>
                            <h5>Speed of visualizer</h5>
                            <input type="range" min={1} max={2000} onChange={this.setAnimationSpeed}/>
                        </div>
                    </div>
                <div className="Buttons">
                    <Button variant="outline-dark" onClick={() => this.resetArray()}>Generate new Array</Button>
                    <Button variant="outline-dark" onClick={() => this.modalShowtoggle()}>Show Modal</Button>
                    <Button variant="outline-dark" onClick={() => this.comparealgo()}>Compare</Button>
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
            }
            {this.state.userip &&
                <UserInput
                show={this.state.modalshow}
                onHide={this.modalHidetoggle}
                user={this.user}
                />
            }

            <SetCaraousel/>
            </>
        );
    }
}

function randomIntFromInterval(min, max){
    return Math.floor((Math.random() * (max - min + 1) + min)*0.7);
}