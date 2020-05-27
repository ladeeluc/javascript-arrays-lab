
var kittens = ['Milo', 'Otis', 'Garfield'] 
//define your array here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop() 
}

function  destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  const kittens_two = [...kittens, name]
  return kittens_two
   //return kittens
}

function prependKitten(name){
  const kittens_three = [name, ...kittens]
  return kittens_three
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
      }
// Add your functions and code here
