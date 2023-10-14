const loadingScreen = getElemById("loading-screen")
const gameCanvas = getElemById("game-canvas")
const CW = gameCanvas.width = innerWidth
const CH = gameCanvas.height = 500
let ctx,currentIndex,currentX,currentY;

function setUpCanvas() {
  loadingScreen.style.display = "none"
  gameCanvas.style.display = "block"
  ctx = gameCanvas.getContext("2d")
  ctx.fillStyle = 'black'
  ctx.font = '24px Arial'
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
}


function drawText(text) {
  if (currentIndex < text.length) {
    const char = text.charAt(currentIndex)
    const charWidth = ctx.measureText(char).width

    if (currentX + charWidth > CW*0.9) {
      currentX = (CW*0.5)
      currentY += 20
    }
    ctx.fillText(char, currentX, currentY)
    currentX += charWidth
    currentIndex++
  }
  if (currentIndex < text.length)
    setTimeout(()=>drawText(text), 50)
}

function setTextData() {
  currentIndex = 0
  currentX = CW*0.5+1
  currentY = 120
}