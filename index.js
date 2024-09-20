// Task 1: Reverse a String ?
//           const inputString = "hello world";
//             Output: "dlrowolleh"
const inputString = "hello world";
let newArr = inputString.split("").reverse().join("");
console.log(newArr);


// Task 2: Find the Longest Word in a Sentence ?

// const inputSentence = "This is a sentence with words of varying lengths"; 
// Output: "varying";

const inputSentence = "This is a sentence with words of varyings lengths"; 
let newArr1 = inputSentence.split(" ");
maxlen = newArr1[0].length;
for(i=1;i<=newArr1.length-1;i++){
    if(newArr1[i].length > maxlen){
        maxlen = newArr1[i].length;
    }
}
console.log(maxlen)

// Task 3: Count the Occurrences of a Word in a Sentence ?
// Output: 2
const inputSentence1 = "This sentence repeats the word 'this' twice"; 
let newArr2 = inputSentence1.toLowerCase().split(/\W+/);
word = "this";
count =0
let x = newArr2.filter((ele)=>{
    if(ele === word){
        count ++
    }
})

console.log(count)

// Task 4: Capitalize the First Letter of Each Word  ?

// const inputSentence = "this is a sentence with words to capitalize"; 
//  Output: "This Is A Sentence With Words To Capitalize"
const inputSentence2 = "this is a sentence with words to capitalize";
newArr3 = inputSentence2.split(" ");
newStr = " "
for(i of newArr3){
    i = i.charAt(0).toUpperCase()+ i.slice(1);
    newStr = newStr + i +" "
}
console.log(newStr)

//(OR) 

let x1 = newArr3.map( (ele)=>{
    let y = ele[0].toUpperCase() + ele.slice(1);
    return y
})
console.log(x1);

// Task 5: Remove Duplicate Elements from an Array ?

// const inputArray = [1, 2, 3, 2, 4, 1];
//  Output: [1, 2, 3, 4];

const inputArray = [1, 2, 3, 2, 4, 1, 8, 5, 2,4,6];
res = []
for(i of inputArray){
    if(!(res.includes(i))){
        res.push(i);
    }
}
console.log(res)
// Task 6: Check if a String is a Palindrome ?

// const inputString1 = "racecar"; 
//  Output: true
const inputString1 = "wow";
let newStr = inputString1.split("").reverse().join("");
if(inputString1 == newStr){
    console.log(true);
}else{
    console.log(false);
}

