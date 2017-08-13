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
  let ranked = document.querySelector('.ranked-list')
  let bullets = ranked.querySelectorAll('li')
  bullets.forEach(function(e)) {
    let i = e.innerText
    let iNumber = parseInt(i,10)
    iNumber += 1
    e.innerText = iNumber
  }

}
