window.addEventListener ('load', () => {
  let lastTime = 0
  const input = new Input
  const loop = (timestamp) => {
    const dt = timestamp - lastTime 
    lastTime = dt 
    ctx.clearRect (0,0,CW*0.5,CH)
    input.animateBotOnListening(dt,ctx)
    lastTime = timestamp 
    requestAnimationFrame(loop)
  }
  setTimeout(() => {
    setUpCanvas()
    loop(0)
  }, 3000)

})