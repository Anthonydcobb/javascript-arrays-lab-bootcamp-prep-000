var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

var destructivelyAppendKitten = (name) => {
  kittens.push(name);
  return kittens
}

var appendKitten = (name) => {
  kittens = [...kittens, name];
  return kittens;
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name);
  return kittens;
}

var prependKitten = (name) => {
  kittens = [name, ...kittens];
  return kittens;
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
  return kittens;
}

var removeLastKitten = () => {
  kittens = kittens.slice(0, kittens.length - 1);
  return kittens;
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
  return kittens;
}

var removeFirstKitten = () => {
  kittens = kittens.slice(1);
  return kittens;
}
