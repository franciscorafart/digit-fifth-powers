let mapString = s =>{
  let res = []
  for (let ss of s)
    res.push(ss)
  return res
}

let multNpow = (x,y) => {
  return mapString(String(x)).map(
      ch => Math.pow(Number(ch),y)
    ).reduce((x,y)=>{return x+y}
  )
}

let isPow = (x,y) => {return (x == multNpow(x,y)) && (x!=1)}

let range = n =>{
  let res = []
  for (let i=1; i<=n;i++)
    res.push(i)
  return res
}

let add = (x,y) => {return x+y}

console.log(range(99999).filter(x =>{return isPow(x,5)}).reduce(add))
