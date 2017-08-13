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
  let target = document.querySelector('.ranked-list')
  let bullets = target.querySelectorAll('li')
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].innerHTML = parseInt(bullets[i].innerHTML,10) + n
  }
}
