Array.prototype.bubbleSort = function() {
  let sorted = false;
  while(!sorted) {
    sorted = true
    for(let i=0; i<this.length; i++){
      j = i + 1;
      if(this[i] > this[j]){
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
        sorted = false;
      }
    }
  }
  return this;
}

String.prototype.substrings = function() {
  let subsArr = [];
  for(let i=0; i<=this.length; i++){
    for(let j=i+1; j<=this.length; j++){
      subsArr.push(this.slice(i,j));
    }
  }
  return subsArr;
}



