function getFirstSelector(selector) {
  let found = document.querySelector(selector)
  return found
}

function nestedTarget() {
  let nested = document.querySelector('#nested')
  let target = document.querySelector('.target')
  return target

}

function deepestChild() {
  let lastVisited = document.getElementById('#grand-node')
  let next = lastVisited.children[0]
  while (next) {
    lastVisited = next
    next = lastVisited.children[0]
  }
  return lastVisited
}

function increaseRankBy (n) {
  let target = document.querySelectorAll('.ranked-list')
  for (let i = 0; i< target.length; i++) {
    let bullets = target[i].querySelectorAll('li')
    for (let j = 0; j < bullets.length; j++) {
      bullets[j].innerHTML = parseInt(bullets[j].innerHTML) + n
  }}
}
