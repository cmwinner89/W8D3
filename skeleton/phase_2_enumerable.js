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

