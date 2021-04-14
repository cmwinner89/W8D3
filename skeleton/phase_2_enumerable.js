timesTwo = function(num) {
  return (num * 2);
}

Array.prototype.myEach = function(callback) {
  for(let i=0; i<this.length; i++){
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback) {
  let myMapArr = [];
  // for(let i=0; i<this.length; i++){
  //   myMapArr.push(callback(this[i]));
  // }
  this.myEach(function(ele){
    myMapArr.push(callback(ele));
  })
  return myMapArr;
}

Array.prototype.myReduce = function(callback, initialValue=this[0]){
  
  let newArr = this
  let acc = initialValue;
  if (initialValue === this[0]){
    newArr.shift();
  }
  newArr.myEach(function(ele){
    
    acc = callback(acc, ele);
  })
  return acc;
}
