

const reverse_num = (x) => {
  var y = x
  x = x.toString()
  var r = []
  if(x[0] != '-') {
    for(let i=0; i<x.length; i++) {
      r[i] = x[x.length - 1 - i]
    }
    var ret = Number(r.join(''))
    if(ret < 2147483647) return ret
    else return 0 
  }else {
    console.log(x.length)
    for(let i=0; i<x.length; i++) {
      if(x[i] == '-') {
        r[i] = '-'
      }else {
        r[i] = x[x.length - i]
      }
    } 
    var ret = Number(r.join(''))
    if(ret > -2147483648) return ret
    else return 0 
  }
}

let num1 = -2147483648
let num2 = -2147483412
let result = reverse_num(num)
// reverse_num(num)
console.log(result);