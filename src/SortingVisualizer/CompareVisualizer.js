import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSortingAlgorithm';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/HeapSort';

import UserInput from './UserInput';

// import { Button } from 'react-bootstrap';

import './CompareVisualizer.css';

// Change this value for the speed of the animations.
var ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
//var NUMBER_OF_ARRAY_BARS = 250;

// This is the main color of the array bars.
// const PRIMARY_COLOR = 'turquoise';

const PRIMARY_COLOR = '#363D44';

const SECONDARY_COLOR = '#3B49DF';

// This is the color of array bars that are being compared throughout the animations.
// const SECONDARY_COLOR = 'gold';

export default class CompareVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      modalshow: false,
      userip:false,
      compare:true,
      array1: [],
      array2: [],
      array3: [],
      array4: [],
      narraybars:250
    //  sarray:10

    };
    this.modalShowtoggle = this.modalShowtoggle.bind(this);
    this.modalHidetoggle = this.modalHidetoggle.bind(this);
    this.startCompare = this.startCompare.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    
    this.user = this.user.bind(this);


  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    var array = [];
    this.setState({userip:false});
    if(!this.state.userip){
        console.log(this.state.narraybars);
        for (let i = 0; i < this.state.narraybars; i++) {
        array.push(randomIntFromInterval(5, (window.innerHeight-250)/4));
        }
        this.setState({array});
        this.setState({array1:array});
        this.setState({array2:array});
        this.setState({array3:array});
        this.setState({array4:array});
        array = [];
  }
  }

  user(arrayy){
    this.setState({array:arrayy});
    
    this.setState({array1:arrayy});
    this.setState({array2:arrayy});
    this.setState({array3:arrayy});
    this.setState({array4:arrayy});

  }
  mergeSort() {
    var arr = this.state.array1.slice();
  
    const animations1 = getMergeSortAnimations(arr);
    
    

    for (let i = 0; i < animations1.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar1');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations1[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations1[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
   // this.setState({array1:arr});
  }

  quickSort() {
    var arr = this.state.array2.slice();

    const animations2 = getQuickSortAnimations(arr);

    


    for (let i = 0; i < animations2.length; i++) {
        //console.log(i+1);
        const arrayBars = document.getElementsByClassName('array-bar2');
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            if(i%3===0){
                const [barOneIdx, barTwoIdx, pivotidx] = animations2[i];
               
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const pivotidxStyle = arrayBars[pivotidx].style;

                //const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR;
                pivotidxStyle.backgroundColor = 'red';
                }, i * ANIMATION_SPEED_MS);

            }
            else{
                
                const [barOneIdx, barTwoIdx, pivotidx] = animations2[i];
                
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
            
            if(animations2[i].length!==0){
                const [barOneIdx, barTwoIdx, new1height, new2height] = animations2[i];

                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${new2height}px`;

                const barTwoStyle = arrayBars[barTwoIdx].style;
                barTwoStyle.height = `${new1height}px`;
            }
            }, i * ANIMATION_SPEED_MS);
        
        }
      }
     // this.setState({array2:arr});
  }

  heapSort() {
    var arr = this.state.array3.slice();

    const animations3 = getHeapSortAnimations(arr);

    

    for (let i = 0; i < animations3.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar3');
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            const [barOneIdx, barTwoIdx] = animations3[i];
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
            
                if(animations3[i].length!==0){
                    const [barOneIdx, barTwoIdx, new1height, new2height] = animations3[i];
    
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${new2height}px`;
    
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barTwoStyle.height = `${new1height}px`;
                }
                }, i * ANIMATION_SPEED_MS);
        }
    }
   // this.setState({array3:arr}); 
  }

  bubbleSort() {
    var arr = this.state.array4.slice();

    const animations = getBubbleSortAnimations(arr);

    


    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar4');
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
    //this.setState({array4:arr}); 
  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  startCompare(){
   this.mergeSort();
   this.quickSort();
   this.heapSort();
   this.bubbleSort();
  }
  modalShowtoggle(){
    //e.preventDefault();
    this.setState({userip:true})
    this.setState({modalshow: true});
  }
  modalHidetoggle(){
    //e.preventDefault();
    this.setState({modalshow: false});
  }
  handleChange(event){
  this.setState({narraybars: parseInt(event.target.value)}, ()=> this.resetArray());
  
  }
  handleSpeedChange(event){
    //this.setState(()=>({sarray: 10-event.target.value}));
    ANIMATION_SPEED_MS=10-event.target.value;
    //console.log(ANIMATION_SPEED_MS);
    }

  render() {
    const {array1} = this.state;
    const {array2} = this.state;
    const {array3} = this.state;
    const {array4} = this.state;

    const l = this.state.array.length;

    
    return (
      <>
      {this.state.compare &&
       <div className="array-container">
        <p style={{color:"gold", margin:"unset"}}>Merge Sort</p>
        {array1.map((value, idx) => (
          <div
            className="array-bar1"
            key={idx+"1"}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${44/l}%`,
              margin: `0 ${22/l}%`
            }}></div>
        ))}
        <br />
        <p style={{color:"gold", margin:"unset"}}>Quick Sort</p>
        {array2.map((value, idx) => (
          <div
            className="array-bar2"
            key={idx+"2"}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${44/l}%`,
              margin: `0 ${22/l}%`
            }}></div>
        ))}
        <br />
        <p style={{color:"gold", margin:"unset"}}>Heap Sort</p>
        {array3.map((value, idx) => (
          <div
            className="array-bar3"
            key={idx+"3"}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${44/l}%`,
              margin: `0 ${22/l}%`
            }}></div>
        ))}
        <br />
        <p style={{color:"gold", margin:"unset"}}>Bubble Sort</p>
        {array4.map((value, idx) => (
          <div
            className="array-bar4"
            key={idx+"4"}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width: `${44/l}%`,
              margin: `0 ${22/l}%`
            }}></div>
        ))}
        <br />
        <button onClick={() => this.resetArray()}>Generate New Array</button>
      <button onClick={() => this.mergeSort()}>Merge Sort</button>
      <button onClick={() => this.quickSort()}>Quick Sort</button>
      <button onClick={() => this.heapSort()}>Heap Sort</button>
      <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
      <button onClick={() => this.startCompare()}>
        Start
      </button>
      <button onClick={this.modalShowtoggle}>Show Modal</button>
      <button onClick={(t)=>this.props.comparealgo(false)}>Revert</button>
       <br /><br />
       <div style={{display: "inline-flex"}}>
       <div style={{color:"black", margin:"10px"}}>Number of Bars:  <input type="number" value={this.state.narraybars} onChange={this.handleChange} /> </div>
       <div style={{color:"black", margin:"10px"}}>Animation Speed:  <input type="range" value={null} min="1" max="9" onChange={this.handleSpeedChange} /> </div>
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
     
      

    </>
    
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}