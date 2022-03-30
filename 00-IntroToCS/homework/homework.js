'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var arrey = num.split ('')
  var revarr = []
  for (var i = 0 ; i < arrey.length ; i++) {
    revarr.unshift (arrey[i])
  }
  var decim = 0
  for ( let i = 0 ; i < revarr.length ; i++) {
    decim = decim + revarr[i]*(Math.pow (2,i))
  }
  return decim
}

function DecimalABinario(num) {
  // tu codigo aca
  var defnum = ''
    var otnum = num
    do {
      defnum = defnum + (otnum % 2)
      otnum = (otnum - (otnum % 2))/2
    } while (otnum > 0)
    return defnum.split('').reverse().join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}