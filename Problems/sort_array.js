const sortArray = (x) => {
  for(let i=0; i<x.length; i++) {
    for(let j=i+1; j<x.length; j++) {
      if(x[i] > x[j]) {
        let temp = 0
        temp = x[i]
        x[i] = x[j]
        x[j] = temp
      }
      console.log(x)
    }
    // console.log(x)
  }
  return x
}

const s = [3,2,1,0,5]
const result = sortArray(s)
console.log(result)