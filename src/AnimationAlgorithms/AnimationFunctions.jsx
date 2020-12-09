import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSortingAlgorithm';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/QuickSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/HeapSort.js';
import {SelectionSort} from '../SortingAlgorithms/SelectionSort';

import '../SortingVisualizer/SortingVisualizer.css';

const PRIMARY_COLOR = '#363D44';
const SECONDARY_COLOR = '#3B49DF';

export const mergeSort = (name, array, animationSpeed) => {
    const animations = getMergeSortAnimations(array);
    for(let i=0; i<animations.length; i++){
        // const arrayBars = document.getElementsByClassName('array-bar');
        const st = name ? (`${name}-array-bar`): 'array-bar';
        const arrayBars = document.getElementsByClassName(st);
        const isColorChange = i%3 !== 2;
        if(isColorChange){
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i%3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(()=>{
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i*animationSpeed);
        }else{
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i*animationSpeed);
        }
    }
}

export const quickSort = (name, array, animationSpeed) => {
    const animations = getQuickSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
        const st = name ? (`${name}-array-bar`): 'array-bar';
        const arrayBars = document.getElementsByClassName(st);
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            if(i%3===0){
                const [barOneIdx, barTwoIdx, pivotidx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const pivotidxStyle = arrayBars[pivotidx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                    pivotidxStyle.backgroundColor = '#000000';
                }, i * animationSpeed);
            }
            else{
                const [barOneIdx, barTwoIdx, pivotidx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const pivotidxStyle = arrayBars[pivotidx].style;

                setTimeout(() => {
                barOneStyle.backgroundColor = PRIMARY_COLOR;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
                pivotidxStyle.backgroundColor = PRIMARY_COLOR;
                }, i * animationSpeed);
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
            }, i * animationSpeed);
        
        }
      }
    
  }


export const bubbleSort = (name, array, animationSpeed) => {
    const animations = getBubbleSortAnimations(array);

    for (let i = 0; i < animations.length; i++) {
        const st = name ? (`${name}-array-bar`): 'array-bar';
        const arrayBars = document.getElementsByClassName(st);
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
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
                }, i * animationSpeed);
        }
    }

}

export const heapSort = (name, array, animationSpeed) => {
    const animations = getHeapSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
        const st = name ? (`${name}-array-bar`): 'array-bar';
        const arrayBars = document.getElementsByClassName(st);
        const isColorChange = i % 3 !== 1;
        if(isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
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
                }, i * animationSpeed);
        }
    }
}

export const selectionSort = (array, animationSpeed) => {
        const animations = SelectionSort(array);
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
                }, i*animationSpeed);
            }else{
                if(animations[i].length === 2){
                    setTimeout(() => {
                        const [firstIdx, lowestIdx] = animations[i];
                        const firstIdxStyle = arrayBars[firstIdx].style;
                        const lowestIdxStyle = arrayBars[lowestIdx].style;
                        firstIdxStyle.backgroundColor = "#363D44";
                        lowestIdxStyle.backgroundColor = "#363D44";
                    }, i*animationSpeed);
                }else{
                    setTimeout(() => {
                        const [firstIdx, firstIdxValue, lowestIdx, lowestIdxValue] = animations[i];
                        const firstIdxStyle = arrayBars[firstIdx].style;
                        const lowestIdxStyle = arrayBars[lowestIdx].style;
                        firstIdxStyle.height = `${lowestIdxValue}px`;
                        lowestIdxStyle.height = `${firstIdxValue}px`;
                    }, i*animationSpeed);
                }
            }
        }
    }