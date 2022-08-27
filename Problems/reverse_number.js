

const reverse_num = (x) => {
  x = x.toString()
  var r = []
  for(let i=0; i<x.length; i++) {
    r[i] = x[x.length - 1 - i]
  }
  return Number(r.join(''))
}

result = reverse_num(19991225)
console.log(result);