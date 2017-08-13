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
  let bullets = document.querySelectorAll('li')
  for (let i = 0; i < bullets.length; i++) {
    let number = parseInt(bullets[i].innerText,10)
    number += n
    bullets[i].innerText = number
  }

}
