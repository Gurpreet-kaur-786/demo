//swap two numbers

/*let a=5
let b=7
a=a+b
b=a-b
a=a-b
console.log("a=",a)
console.log("b=",b)*/

//factorial num


/*let fac=1 
function fact(num){
    for(let i=2;i<=num;i++){
        fac=fac*i
    }
    return fac
}
let ans=fact(5)
console.log(ans)*/


//fabonacci series

/*let n1=0
let n2=1
let next_term
function fab(num){
    for(let i=0;i<=num;i++){
        console.log(n1)
        next_term=n1+n2
        n1=n2
        n2=next_term
    }
}
fab(7)*/

//sum of natural numbers

/*let sum=0
function natural(num){
    for( let i=1;i<=num;i++){
        sum=sum+i
    }
    console.log(sum)

}
natural(5)*/

// let n=4321
// console.log(n)




//array

// let arr=[1,2,4,88]
// console.log(arr)
// arr.push(43)
// console.log(arr)
// arr.pop()
// console.log(arr)
// let info=["guri",23,"majtha"]
// console.log(info.length)
// console.log(info[2])
// info[0]="gurpreet"
// console.log(info)

// let marks=[1,2,3,4,5]
// for(let i=0;i<marks.length;i++){
    // console.log(marks[i])
// }

// for of loop

// for (let element of marks){
    // console.log(element)
// }

/*let state=["asr","pthankot","gurdaspur"]
for(let value of state){
    console.log(value.toUpperCase())
}*/

/*let num=[85,97,44,37,76,60]
let sum=0
let avg,i;
for(let mark of num){
    sum+=mark
    
}

avg=sum/num.length
console.log(`avg marks of class =${avg}`)
console.log(`total sum of num =${sum}`)*/

// function func_name(arg1,arg2){//function definition
     //fuction body


// }
// func_name(a,b)//function call

// arrow function
/*const arrowFunction = (a,b)=>{
    return a+b;

}
console.log(arrowFunction(4,6))*/

// arrow function without return keyword

/*const sum = (a,b)=> a+b;
console.log(sum(6,7));*/


// function login(username,pswd){
    // return (`my username is ${username} and my password is ${pswd}`)
// }
// console.log(login("guri",1234))

// setTimeout function
/*const x=10
setTimeout(() =>{
    console.log(x)
},2000)*/


//date

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof(myDate))

/*let a ="gurpreet"
for(let i=0;i<a.length;i++){
    console.log(a[i])
    if(a[i]=='p'){
        
        break;
    }
    // else{
    // console.log(a[i])
    // }
}*/

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date("2021-03-25");
// console.log(d.getMonth())
// let month = months[d.getMonth()];
// console.log(month)

const obj ={
    id:121,
    name:"guri",
    email:"guri@gmail.com"
}
for(const [key,value] of Object.entries(obj)){
    // console.log(key,value)
    console.log(value)
}