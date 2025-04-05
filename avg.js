/*const arr=[1,2,3,4]
arr.forEach(function(value,index){
    console.log(`${value} of index is ${index} `)
})*/

let str = "gurpreet"
let count=0
// let n=str.length
for(let i=0;i<=str.length;i++)
    if(str[i]=='a'||str[i]=='e'||str[i]=='o'||str[i]=='i'||str[i]=='i'||str[i]=='u'){
        count++;
    
}
// console.log(count)

let nam="madam"
let reverse_str = ""
for(let i=nam.length-1;i>=0;i--){
    reverse_str=reverse_str+nam[i]

}
if(nam == reverse_str){
    // console.log("string is palindrome")
}
else{
    // console.log("string is not palindrome")
}

function typeCheck(input){
    if(typeof(input)=== "number"){
        console.log("number")
    }
    else if(typeof(input)=== "string"){
        console.log("string")
    }
    else if(Array.isArray(input)){
        console.log("array")

    }
    else if(typeof(input)=== "object"){
        console.log("object")
    }
    else{
        console.log("invalid")
    }
}
// let arr=[1,2,3]
// typeCheck({"name":"hlo"})

let arr=[1,2,3,4,5]
let sum=0
arr.forEach(function(vallue){
    sum+=vallue;

})
// console.log(sum)

const obj = {
    email:"gurpreetkaur@gmail.com",
    username:{
        firstname:"gupreet",
        lastname:"kaur"
    }
}
// console.log(obj.username.lastname)
// console.log(obj.username)
// console.log(obj.email)

function login(username,password)   
{
    if(username===undefined || password===undefined)
    {
        return "empty";
    }
    else
    {

    
    return(`My user name is ${username} and password is ${password}`)
    }

}
// console.log(login("guri",123))
// console.log(login())


for(let i=0;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log("*")
    }
    console.log()
}
