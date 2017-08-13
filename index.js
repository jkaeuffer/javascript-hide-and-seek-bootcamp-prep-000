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

}
function increaseRankBy (n) {
  let target = document.querySelectorAll('.ranked-list')
  for (let i = 0; i< target.length; i++) {
    let bullets = target[i].querySelectorAll('li')
    for (let j = 0; j < bullets.length; j++) {
      bullets[i].innerHTML = parseInt(bullets[i].innerHTML) + n
  }}
}
