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
  bullets.forEach(function(e) {
    let i = e.innerText
    let iNumber = parseInt(i,10)
    iNumber += n
    e.innerText = iNumber
  })

}
