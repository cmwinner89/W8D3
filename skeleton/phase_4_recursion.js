function range(start, end){
    if (end <= start){
        return [end];
    }

    let arr = range(start, end-1);
    arr.push(end);
    return arr;
}

function sumRec(arr){
    if (arr.length <= 1){
        return arr[0];
    }

    let n = arr.pop();
    // debugger
    let sum = sumRec(arr);
    sum += n;
    return sum;
}

function exponentOne(base, exp){
    if (exp === 0){
        return 1;
    }

    return base * exponentOne(base, exp-1);
}

function exponentTwo(base, exp){
    if (exp === 0){
        return 1;
    }
    if (exp === 1){
        return base;
    }

    if((exp%2) === 0){
        return exponentTwo(base, exp/2)**2;
    }
    else{
        return base*(exponentTwo(base, ((exp-1) /2)) **2);
    }

}

function fibonacci(n){
    if(n===2){
        return [0, 1];
    }
    if(n===1){
        return [0];
    }
    // debugger
    let arr = fibonacci(n-1);

    let i = arr[arr.length-1] + arr[arr.length-2];

    arr.push(i);

    return arr;
}

function deepDup(arr){
    // if(arr.length <= 1){
    //     return arr;
    // }
    if(arr.constructor != Array){
        return [arr];
    }

    let newArr = [];

    for(let i=0; i<arr.length; i++){
        let subArr = arr[i];
        let val = deepDup(subArr);
        newArr = newArr.concat(val);
        // debugger
    }

    return newArr;
}


function bsearch(arr, target){
    
    if(arr.length <=1){
        arr[0] ===target ? 0 : -1;
    }
    let mid = arr.length/2;
    
    if(target === arr[mid]){
        return mid;
    }

    let left = arr.slice(0, mid);
    let right = arr.slice(mid+1, arr.length-1);

    if(target < mid){
        let leftRes = bsearch(left, target);
        return leftRes != -1 ? leftRes : -1;
    }
    else{
        let searchRes = bsearch(right, target);
        return searchRes != -1 ? searchRes + 1 +mid : -1;
    }
}
