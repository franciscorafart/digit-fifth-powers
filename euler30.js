//Array with all chars of string
let mapString = s =>{
  let res = []
  for (let ss of s)
    res.push(ss)
  return res
}

//returns the sum of all the digits of x to the power of y
let multNpow = (x,y) => {
  return mapString(String(x)).map(
      ch => Math.pow(Number(ch),y)
    ).reduce((x,y)=>{return x+y}
  )
}

//determines if x is equal to the power of its digits to y
let isPow = (x,y) => {return (x == multNpow(x,y)) && (x!=1)}

//array with range of a number
let range = n =>{
  let res = []
  for (let i=1; i<=n;i++)
    res.push(i)
  return res
}
//add two numbers
let add = (x,y) => {return x+y}

//evaluation
let result = range(999999).filter(x =>{return isPow(x,5)}).reduce(add)

console.log(result)
