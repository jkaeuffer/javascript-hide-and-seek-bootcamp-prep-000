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
  let current = 'div#grand-node'
}
function increaseRankBy (n) {
  let target = document.querySelectorAll('.ranked-list')
  for (let i = 0; i< target.length; i++) {
    let bullets = target[i].querySelectorAll('li')
    for (let j = 0; j < bullets.length; j++) {
      bullets[j].innerHTML = parseInt(bullets[j].innerHTML) + n
  }}
}
