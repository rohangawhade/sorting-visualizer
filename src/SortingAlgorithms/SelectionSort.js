export function SelectionSort(array){
    const animations = [];
    // console.log(array);
    let n = array.length;
    let i = 0;
    while(i<n){
        let minVal = array[i], minIdx = i;
        for(let j=i; j<n; j++){
            animations.push([j, j]);
            if(array[j]<minVal){
                minVal = array[j];
                minIdx = j;
            }
        }
        if(minIdx !== i){
            animations.push([i, minIdx]);
            animations.push([i, array[i]]);
            animations.push([minIdx, array[minIdx]]);
            let temp = array[i];
            array[i] = array[minIdx];
            array[minIdx] = temp;
        }
        i++;
    }
    console.log(array);
    return animations;
}