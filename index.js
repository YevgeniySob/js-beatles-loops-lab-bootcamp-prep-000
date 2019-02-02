// add solution here
function theBeatlesPlay(arr1, arr2){
  myArray = []
  for(var i = 0;i < arr1.length; i++){
    myArray.push(arr1[i] + " " + arr2[i])
  }
  return myArray
}