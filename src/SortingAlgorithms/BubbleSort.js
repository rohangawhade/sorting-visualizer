export function getBubbleSortAnimations(array){
    const animations=[];
    if(array.length <= 1) return array;
    bubbleSortHelper(array, array.length, animations);
    return animations;
}

function bubbleSortHelper(array, n, animations){
    let i=0;
    let j=0; 

    for (i = 0; i < n-1; i++)       
    {
        for (j = 0; j < n-i-1; j++)  
        {
            animations.push([j,j+1]); //for color change

            if (array[j] > array[j+1]) 
            {
                let a=array[j];
                array[j]=array[j+1];
                array[j+1]=a;
                animations.push([j,j+1,array[j+1],array[j]]); //for swapping
            }
            else animations.push([]);

            animations.push([j,j+1]); //for reverting the color
        }
    }
}