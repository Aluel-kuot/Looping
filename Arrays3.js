//quiz1
//Write a function that accepts an array of strings 
// and console.logs each element using a for loop.
function words(){
for(let i=0; i<word.length; i++){
    console.log(i)
    console.log(word[i])
}
}
let word=['Kenya','Uganda','Rwanda','Ethiopia']
words(word)
//quiz2
//Write a function that accepts an array of numbers and uses the forEach() 
// method to console.log each number multiplied by 2
let numbers=[2,4,6,8,9]
function numbs(){
let result=[]
numbers.forEach(function(number){
result.push(number *2)
})
console.log(result)
}
numbs(numbers)

//quiz3
//Write a function that takes in an array of numbers and consoles the
//  first four items multiplied by 8 and the last two
//  added by 5. Console the array with the new values
let num=[5,7,8,9,4,1,2]
function array(){
let nums=[]
for(x=0;x<num.length;x++){
if(x===3){
nums.push(num[x]*8)
}
else{
    x<num.length-3
    nums.push(num[x]+5)
}
}
console.log(nums)
}
array(num)

//quiz4
//Write a function that takes in the following array and 
// use a while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function arr(){
    let c=0
    while(c < arrNum.length){
if(c===4){
    break;
}
console.log(arrNum[c])
c++
   }

}
arr(arrNum)

//quiz5
//Write a function that takes in a an array of strings and use a 
// continue statement when the item is at the second index

function fruit(){
for(let a=0;a<fruits.length;a++){
    if(a===1){
        continue;
    }
    console.log("continue",fruits[a])
}
}
let fruits= ['apple','plum','banana','strawberries','kiwi']
fruit(fruits)
