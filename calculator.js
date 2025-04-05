function calculator(a,b,op){
    let result;
    switch(op){
        case '+': result=a+b
        break
        case '-': result=a-b
        break
        case '*': result=a*b
        break
        case '/': result=a/b
        default:
            // console.log("invalid operator")
        } 
          
          return result
}
let ans=calculator(88,4,'/')
// console.log(ans)

let score = '33'
let isnumber = Number(score)
// console.log(typeof(isnumber))
// console.log(isnumber)
 let str = "33abc"
 let isnum = Number(str)
//  console.log(typeof(isnum))
//  console.log(isnum)

let a = true
let isbol = Number(a)
// console.log(typeof(a))
// console.log(isbol)

// let b=0
// let b = ""
let b = "guri"
let bool = Boolean(b)
// console.log(typeof bool)
// console.log(bool)

let someNumber = 33
let stringNum = String(someNumber)
// console.log(stringNum)
// console.log(typeof stringNum)

// ******************** operations ********************

let str1 = "hello"
let str2 =" guri"
let str3 = str1 + str2
// console.log(str3);

// console.log("1"+2)             // 12
// console.log("1"+2+2)            //122
// console.log(1+2+"2")            //32

let p = 5
let prefix = ++p
let postfix = p++
// console.log(postfix) 
// console.log(prefix)



const gameName = new String("gurpreet")
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(3,8)
// console.log(newString);

const anotherStr = gameName.slice(-7,4)
// console.log(anotherStr)

const newonestr = "  guri  "
const nextStr = newonestr.trim()
// console.log(newonestr)
// console.log(nextStr)

const url = "https//gurpreet.com/gurpreet%20guri/"

// console.log(url.replace('%20','kaur'))

// console.log(url.includes('guri'))

// console.log(Math.max(4,5,6));
// console.log(Math.min(1,4,3));



