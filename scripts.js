const DEFAULT_SIZE = 50
const grid = document.getElementById('grid')
const reset = document.getElementById('reset')

reset.onclick = () => clearGrid()

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function clearGrid() {
grid.textContent = " ";
setupGrid(DEFAULT_SIZE)
}

function setupGrid(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
  
    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add("grid-element")
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
}

function changeColor(e) {   
    if(e.type === 'mouseover' && !mouseDown) return 
        e.target.classList.add("grid-element-clicked")
    }


    
window.onload = () =>{
    setupGrid(DEFAULT_SIZE)
}