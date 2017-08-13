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
  let visited = [document.querySelector('div#grand-node')]
  let queue = [document.querySelector('div#grand-node')]
  while (queue.length > 0) {
    if (queue[0].children) {
      queue.push(queue[0].children)
      queue.splice(0,1)
      visited.push(queue[0])
    }
    else {
      queue.splice(0,1)
      visited.push(queue[0])
    }
  }
  return visited[-1]
}

function increaseRankBy (n) {
  let target = document.querySelectorAll('.ranked-list')
  for (let i = 0; i< target.length; i++) {
    let bullets = target[i].querySelectorAll('li')
    for (let j = 0; j < bullets.length; j++) {
      bullets[j].innerHTML = parseInt(bullets[j].innerHTML) + n
  }}
}
