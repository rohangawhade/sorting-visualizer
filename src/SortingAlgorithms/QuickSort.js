export function getQuickSortAnimations(array) {
    const animations=[];
    if(array.length <= 1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations;
}

function quickSortHelper(array,left,right,animations){
    if(right-left <= 0) return;
    else{
        let pivot=array[right];
        let partition=partitionFunc(array, left, right, pivot, animations);
        quickSortHelper(array, left, partition-1, animations);
        quickSortHelper(array, partition+1, right, animations);
    }
}

function partitionFunc(array, left, right, pivot, animations){
  
    
    let i = (left - 1);  // Index of smaller element
    let j = left;
    let p=0;
    for (j = left; j <= right- 1; j++)
    {
       
        animations.push([i+1,j,right]); //for color change
        // If current element is smaller than the pivot
        p = i+1;
        
        if (array[j] < pivot)
        {
            i++;    // increment index of smaller element
            let a = array[i];
            array[i] = array[j];
            array[j] = a;
            animations.push([i, j, array[j], array[i]]); //for swapping
           
        }
        else animations.push([]);
        animations.push([p,j,right]); //for reverting color
    }
    let a = array[i + 1];
    array[i+1] = array[right];
    array[right] = a;
    animations.push([i+1, i+1, right]);
    animations.push([i+1, right, array[right], array[i+1]]);
    animations.push([i+1, i+1, right]);


    return (i + 1)

}