Array.prototype.uniq = function(){
    let uniqArr = [];
    let arrLength = this.length;
    for(let i=0; i<this.length; i++){
        if(uniqArr.includes(this[i])){
           continue;
        }
        else{
            uniqArr.push(this[i]);
        }
    }   
    return console.log(uniqArr);
}

Array.prototype.twoSum = function(){
    let sumsArr = [];

    for(let i=0; i<this.length-1; i++){
        let j = i+1;

        if ((this[i] + this[j]) === 0){
            sumsArr.push([i, j]);
        }
    }

    return console.log(sumsArr);
}

Array.prototype.transpose = function() {
    let tranpsArr = [];

    for(let i=0; i<this.length; i++){
        tranpsArr.push([]);
    };

    for(let i=0; i<this.length; i++){
        for(let j=0; j<this.length; j++){
            // debugger
            tranpsArr[j].push(this[i][j]);
        };
    };

    return console.log(tranpsArr);
}   