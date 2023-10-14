class Bot {
  constructor () {
    /** setup images **/
    this.imgW = 1401*0.12
    this.imgH = 2150*0.12
    this.x = (CW *0.5)-this.imgW
    this.y = CH - this.imgH
    this.indx = 0
    this.maxIndx = 4
    this.images = loadedImages
    this.frameTimer = 0
    this.fps = 10
    this.frameInterval = 1000/this.fps
  }

  renderBot (context) {
    context.drawImage (this.images[this.indx], this.x, this.y, this.imgW, this.imgH)
  }
  increaseFrame() {
    (this.indx < this.maxIndx)?this.indx++: this.indx = 0
  }

  controlFps (dt) {
    if (this.frameTimer > this.frameInterval) {
      this.increaseFrame()
      this.frameTimer = 0
    } else this.frameTimer += dt
  }

  animateBot (dt, ctx) {
    this.controlFps (dt)
    this.renderBot (ctx)
  }
}