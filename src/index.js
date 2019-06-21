import './a';

const arr = [
  new Promise(() => {}),
  new Promise(() => {}),
]

arr.map(val => {
  console.log(val)
})