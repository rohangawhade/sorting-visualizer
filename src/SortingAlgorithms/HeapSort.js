export function getHeapSortAnimations(array) {
    const animations=[];
    if(array.length <= 1) return array;
    heapSortHelper(array, animations);
    console.log(array);
    return animations;
}

function heapSortHelper(array, animations){
    let i;
    let n=array.length;
    for (i = n / 2 - 1; i >= 0; i--)
        heapify(array, array.length, i, animations);
 
    // One by one extract an element from heap
    for (i = n - 1; i > 0; i--) {
        // Move current root to end
        animations.push([0, i]); 
        let a=array[0];
        array[0]=array[i];
        array[i]=a;
        animations.push([0, i, array[i], array[0]]); 
        animations.push([0, i]); 

        // call max heapify on the reduced heap
        heapify(array, i, 0, animations);
    }
}

function heapify(array, n, i,animations){
    
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
 
    // If left child is larger than root
    if (l < n && array[l] > array[largest])
        largest = l;
 
    // If right child is larger than largest so far
    if (r < n && array[r] > array[largest])
        largest = r;
 
    // If largest is not root
    if (largest !== i) {
        animations.push([i, largest]); 
        animations.push([i, largest, array[largest], array[i]]); 
        animations.push([i, largest]); 
        let b=array[i];
        array[i]=array[largest];
        array[largest]=b;
 
        // Recursively heapify the affected sub-tree
        heapify(array, n, largest, animations);
    }
}