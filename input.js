let transcript;
recognition.onresult = function(event) {
  transcript = event.results[0][0].transcript
}

class Input {
  constructor () {
    this.bot = new Bot
    gameCanvas.addEventListener('touchstart', () => { 
      recognition.onend = () => { 
        ctx.clearRect(CW*0.5,0,CW,CH) 
         speakAns(transcript)
         transcript = null
      }
    })

    gameCanvas.addEventListener ('touchend',
      () => {
        if (!recognitionActive) {
          recognition.start()
          recognitionActive = true
        }
      })
  }

  animateBotOnListening(dt,
    ctx) {
    if (ANIMATE)
      this.bot.animateBot(dt, ctx)
    else this.bot.renderBot(ctx)
  }
}


function getAnswer (text) {
  for (let obj of _ANSWERS) {
    for (let key in obj)
    if (stringSimilarity (key, text) > 0.5) return obj.type === 'REQUEST' ? [obj[key],key.slice(key.indexOf(' ')-1,key.length)] : [obj[key],null]
  }
  return [0,0]
}


function speakAns (transcript) {

  if (transcript) {
    const [answers, siteName] = getAnswer(transcript)
    setTextData()
    let txt = `Did you mean ,${transcript}`
    drawText(txt) 
    setTimeout (() => { 
      let speech;
      if (answers) speech = answers[Math.floor(Math.random()*answers.length)] 
      else speech = NOT_FOUND.NOT_FOUND_MSG[Math.floor(Math.random()*4)] 
      if (siteName)openSite(siteName,speech)
      synth.speak (speech)
    
  },txt.length*100)
  }else recognitionActive = false
} 