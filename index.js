// add solution here
function theBeatlesPlay(arr1, arr2){
  myArray = []
  for(var i = 0;i < arr1.length; i++){
    myArray.push(arr1[i] + " " + arr2[i])
  }
  return myArray
}

function johnLennonFacts(arr){
  var y = 0
  while (y < arr.length){
    arr[y] = arr[y] + "!!!"
    y++
  }
  return arr
}