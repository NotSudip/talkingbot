const QNA = {
  "Hello": ([getUtterance('Hello sir , How can i help you?')]),
  "What is your name?": ([getUtterance('My name is alexa'), getUtterance('I am alexa')]),

  "What can you do?": ([getUtterance('I can not do complex tasks'), getUtterance('I can provide answer of simple questions')]),

  "How are you?": ([getUtterance('I am fine'), getUtterance('I am fine , how are you')]),

  "Tell me about yourself.": ([getUtterance('I am simple offline chatbot'), getUtterance('I am a simple chatbot created by Sudip and Sarowar')]),

  "What do you like?": ([getUtterance('I am not a human so i have no felling about anything'), getUtterance('I Don\'t know'), getUtterance('I like to chat with you,sir')]),

  "Do you have feelings?": ([getUtterance('No sir'), getUtterance('I don\'t have felling like human'), getUtterance('I am a simple program, so i don\'t have felling')]),

  "What's the weather like today?": ([getUtterance('I don\'t have the realtime access'), getUtterance('I don\'t have that information')]),

  "Will it rain tomorrow?": ([getUtterance('It Only God knows the answer of this question')]),

  "I love you": ([getUtterance('ooooooo maah goahh truehuu laaav, i love you too sir'), getUtterance('I hate you'), getUtterance('sala harami')])
}

const REQUEST = {
  "open youtube": ([getUtterance('opening youtube'), getUtterance('ok sir, iam opening YouTube on your chrome browser')]),
  "open facebook": ([getUtterance('opening facebook'), getUtterance('ok sir, iam opening facebook on your chrome browser')])
}

const NOT_FOUND = {
  NOT_FOUND_MSG: [getUtterance('sorry sir, i do not know the answer of this question.'),
    getUtterance('sorry sir ,i could not understand your question'),
    getUtterance('sorry sir, i can not provide the answer of this question'),
    getUtterance('I do not have the answer, please ask me something else')]
}

/**  this is for controlling the bot animation  **/

let ANIMATE = false

let _ANSWERS = [QNA, REQUEST, NOT_FOUND]

for (let obj of _ANSWERS) {
  for (let key in obj) {
    obj [key].forEach(s => {
      s.onend = ()=> {
        ANIMATE = false
        recognitionActive = false
      }
      s.onstart = ()=>ANIMATE = true
    })
  }
}


function openSite(siteName,obj) {
 obj.onend = ()=> {
    ANIMATE = false
    recognitionActive = false
    setTimeout(()=>window.open(`www.${siteName}.com`),1000)
  }
}


QNA.type = 'QNA'
REQUEST.type = 'REQUEST'
NOT_FOUND.type = 'NOT_FOUND'