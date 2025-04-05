// let fac=1
// function fact(n){
    // for(let i=2;i<=n;i++){
        // fac=fac*i
    // }
    // return fac
// }
// let result=fact(5)
// console.log(result)

/*let a=5
let b=5
let c=6
let d="4"
console.log("a==b",a ==b)
console.log("a==c",a ==c)
console.log("a!=b",a != b) 
console.log("a===b",a === b)
console.log("a===d",a ===d)*/

/*const obj={
    name:"bikram",
    age:22,
    class: "msc",
    email:"bikram@gmail.com",
    IsLoggedIn:false,
    days: ["Monday","friday"]
}
console.log(obj.email)
obj.email = "guri1234@gmail.com"
console.log(obj.email)*/

/*const emp={
    empid : 54,
    dept : "comp",
    clg : "university",
    address : city={
        village : "majitha",
        street: 11
    }
}
console.log(emp.address.street)*/

/*const obj2 = {}

obj2.full_name = "gurpreet kaur"
obj2.qualification = "master"
obj2.grade = 7

console.log(obj2)*/

function greet(name, callback) {
    callback(`Hii how r u, ${name}!`);
}
greet('Guri', message => console.log(message)); 
