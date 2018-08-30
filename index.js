// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return name
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return name
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return name
}

function appendKitten(name){
let result = kittens.concat(name)
return result;
}
