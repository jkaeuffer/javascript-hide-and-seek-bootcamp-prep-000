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
    let bullets = target.querySelectorAll('li')
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].innerHTML = parseInt(bullets[i].innerHTML) + n
  }}
}
