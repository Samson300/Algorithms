// Given two arrays write a function to find out if two arrays have the same frequency of digits.
firstArray = [2,1,1,1,2,5]
secondArray = [2,2,1,1,1,5]
thirdArray = [1,2,3,4,7]
function frequencyCheckArrays(array1, array2) {
    new1 = array1.sort()
    new2 = array2.sort()
    newArray = []
    isCorrect = true
    console.log(new1)
    console.log(new2)
    if(array1.length === array2.length){
        for(i=0; i<=array1.length; i++){
            if(new1[i] === new2[i]) {
                // newArray.push[new1[i]]
                isCorrect = true
            } else {
                return isCorrect = false
            }
        }
    } else {
            isCorrect = false
    }
    return isCorrect
}
// console.log('Is this thing on?')
console.log(frequencyCheckArrays(firstArray, secondArray));
console.log(frequencyCheckArrays(thirdArray, firstArray));
