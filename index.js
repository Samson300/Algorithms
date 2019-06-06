// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// #1. Given two arrays write a function to find out if two arrays have the same frequency of digits.
// firstArray = [2,1,1,1,2,5]
// secondArray = [2,2,1,1,1,5]
// thirdArray = [1,2,3,4,7]
function frequencyCheckArrays(array1, array2) {
    new1 = array1.sort(function(a,b){return a-b})
    new2 = array2.sort(function(a,b){return a-b})
    newArray = []
    isCorrect = true
    console.log(new1)
    console.log(new2)
    if(array1.length === array2.length){
        for(i=0; i<=array1.length; i++){
            if(new1[i] === new2[i]) {
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
// console.log(frequencyCheckArrays(firstArray, secondArray));
// console.log(frequencyCheckArrays(thirdArray, firstArray));


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// #2. Given two arrays write a function to determine if each value in our first array contains a corrsponding value
// to the second power in the second array.
// firstArray = [1,2,3,4]
// secondArray = [1,9,4,16]
// thirdArray = [1,2,3,4]

function arrayCheckToTheSecondPower(array1, array2) {
    new1 = array1.sort(function(a,b){return a-b})
    new2 = array2.sort(function(a,b){return a-b})
    console.log(new1)
    console.log(new2)
    isCorrect = true
    if(array1.length === array2.length){
        for(i=0; i<array1.length; i++){
            if(new1[i] * new1[i] === new2[i]) {
                isCorrect = true
            } else {
                isCorrect = false
            }
        }
    } else {
        return isCorrect = false
    }
    return isCorrect
}

// console.log(arrayCheckToTheSecondPower(firstArray, secondArray))
// console.log(arrayCheckToTheSecondPower(firstArray, thirdArray))


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// #3. Given two positive integers write a function to find out if two numbers have the
// same frequency of digits.
function frequencyCheckNumbers(num1, num2) {
    digits1 = []
    digits2 = []
    num1String = num1.toString();
    num2String = num2.toString();
    isCorrect = true
    for(i=0; i<num1String.length; i++) {
        digits1.push(num1String.charAt(i))
        digits2.push(num2String.charAt(i))
    }
    sortDigits1 = digits1.sort(function(a,b){return a-b})
    sortDigits2 = digits2.sort(function(a,b){return a-b})
    console.log(sortDigits1)
    console.log(sortDigits2)
    if(num1String.length === num2String.length){
        for(j=0; j<num1String; j++) {
            if(sortDigits1[j] === sortDigits2[j]) {
                isCorrect = true
            } else {
                return isCorrect = false
            }
        }
    } else {
        return isCorrect = false
    }
    return isCorrect
}

// console.log(frequencyCheckNumbers(123, 123));
// console.log(frequencyCheckNumbers(2315, 3221));
// console.log(frequencyCheckNumbers(123, 231));


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// #4. Create a function that accepts two strings and checks if they are valid anagrams.
string1 = 'pie';
string2 = 'eip';
string3 = 'pies';
string4 = 'pwe';

function stringAnagramsCheck(str1, str2) {
    letters1 = []
    letters2 = []
    isCorrect = true
    if(str1.length === str2.length) {
        newString1 = str1.split('').sort();
        newString2 = str2.split('').sort();
        for(i=0; i<str1.length; i++){
            letters1.push(str1.charAt(i))
            letters2.push(str2.charAt(i))
        }
        for(j=0; j<letters1.length; j++){
            if(newString1[j] === newString2[j]) {
                isCorrect = true
            } else {
                return isCorrect = false
            }
        }
    } else {
        return isCorrect = false
    }
    return isCorrect
}

console.log(stringAnagramsCheck(string1, string2));
console.log(stringAnagramsCheck(string1, string1));
console.log(stringAnagramsCheck(string1, string3));
console.log(stringAnagramsCheck(string1, string4));